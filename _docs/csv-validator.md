---
layout: home
---
This article explains how to build a CSV validator in Retool. At its core, this problem has three parts:

* Upload a CSV
* Validate the data
* Write the data to a data store 

The upload can be accomplished using the [file upload button](https://retool.com/components/file-button). Writing to the data store can be accomplished using [resource queries](https://docs.retool.com/docs/queries). How can we accomplish the second step, validating the data after upload?

### Validating Data
The `fileUploadButton` can parse CSV files and store the parsed object as an array in the application state, as `fileUploadButton.parsedValue`. We could write a JavaScript query to validate `fileUploadButton.parsedValue`, and return `true` if the data is valid, and `false` otherwise. However, this approach does not allow us to change the data in the CSV.

A more elegant solution is to decouple the data from the `fileUploadButton` component, using [temporary state](https://docs.retool.com/docs/temporary-state). The `fileUploadButton` submit can trigger a JS query which copies the CSV contents to our temporary state. Similarly, we can write methods to update and delete records from the temporary state.

In effect we will use temporary state variable `records` as a data store, and construct queries to cover the usual combination of CRUD operations. For our CSV upload app, we need to cover several operations:
* Create - copy data from `fileUploadButton.parsedValue` into the `records` object
* Read - `records.value`
* Update - update a row in the `records` object, using a row index
* Delete - delete a row from the `records` object

## CRUD
The create query needs to append data to the `records` object. We can do this by copying the `records` object, appending new records, and writing back to the `records` object. 
```javascript
// copy_csv.js

// copy in
var all_records = records.value ? records.value : [];

// add record
all_records = all_records.concat(fileUploadButton.parsedValue[0])

// copy out
records.setValue(all_records)
```

The update query will create two partitions of the `records` object - one containing all the records before `table.selectedRow.index`, and the other containing all records after `table.selectedRow.index`. We can then assemble our updated record set by appending the partitions and the updated record (as defined in `form.data`).
```javascript
// update_record.js

// copy in
const data = records.value
const index = table.selectedRow.index

// create partitions
var partition_one = data.slice(0, index)
var partition_two = data.slice(index + 1)

// overwrite record
const row = form.data

// aggregate partitions
partition_one.push(row)
const all_partitions = partition_one.concat(partition_two)

// copy out
records.setValue(all_partitions)
```

The delete query can be constructed similar to the update query, by combining two partitions which exclude the deleted record.

## Validating
Now that our data lives in temporary state, we can use JS queries to implement all sorts of creative validations. In the example below, I demonstrate how to validate the data type, range, and values for columns. This sort of logic is easily extensible - if you can write a validation in JS, you can implement it in Retool.

I found it helpful to structure my validation queries in two section - a config section, and a runtime section. The config section can be modified for different use cases, while the runtime section will remain largely consistent.
```javascript
const valid_dtypes = 
      {
        'ID': 'int',
        'Label': 'string',
        'Money': 'float',
        'Date': 'date',
        'Description': 'string'
      }

const valid_range =
      {
        'Date': ['05/31/2019', '05/31/2022'],
        'Money': [10, 20]
      }

const valid_set_member = 
      {
        'Label': ['Orange', 'Green']
      }
```

Now we can iterate through the rows, keeping track of which rows have errors and which do not. I use two additional objects to keep track of validation status and error messages - `valid_array` and `error_array`, both arrays with the same number of records as the original dataset. You could keep track of error messages in a matrix as well, if you wanted to track errors for individual cells rather than rows as a whole. You can see where I'm going - this validation script can be as powerful as you have time to make it.
```javascript
// iterate through columns
const raw_records = formatDataAsObject(records.value)
var valid_array = Array(transactions.value.length).fill(true);
var error_array = Array(transactions.value.length).fill('');

for(var i=0; i<columns.length; i++){
  var dtype = column_dtypes[columns[i]]
  var values = records[columns[i]]
  
  if(dtype == 'int'){
    for(var j=0; j<values.length; j++){
      // validate data type
      const isnan = isNaN(parseInt(values[j]))
      valid_array[j] = isnan || !valid_array[j] ? false : true
      error_array[j] = isnan ? error_array[j].concat(columns[i] + ' data type, ') : error_array[j]
    }
  }

  if(dtype == 'float'){
    for(var j=0; j<values.length; j++){    
      // validate data type
      const isnan = isNaN(parseFloat(values[j]))
      valid_array[j] = isnan || !valid_array[j] ? false : true
      error_array[j] = isnan ? error_array[j].concat(columns[i] + ' data type, ') : error_array[j]
      
      // validate data range
      if(column_range[columns[i]]){
        const min = column_range[columns[i]][0]
        const max = column_range[columns[i]][1]
        
        if(parseFloat(values[j]) < min || parseFloat(values[j]) > max){
          valid_array[j] = false
          error_array[j] = error_array[j].concat(columns[i] + ' outside of data range, ')
        }
      }
    }
  }
    
  if(dtype == 'date'){
    for(var j=0; j<values.length; j++){        
      // validate data type
      const isnan = isNaN(Date.parse(values[j]))
      valid_array[j] = isnan || !valid_array[j] ? false : true
      error_array[j] = isnan ? error_array[j].concat(columns[i] + ' data type, ') : error_array[j]
    }
  }
    
}
```

Finally, let's copy our validation objects to temporary state so that we can reference them in other parts of the application. We can use the `valid_array` to highlight rows with incorrect values when we render this data in a table.
```javascript
valid_array.setValue(valid_array);
error_array.setValue(error_array);
```

And there you have it! You can now create a simple CSV validator in Retool. Happy building!