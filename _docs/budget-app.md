---
layout: home
---
The user uploads historic transaction data and income, and generates projected expenses for a selected month.

## Data Model
* Transactions
* Accounts
* Projected_Income
* Projected_Expenses

```
Accounts
    ID                      INT PRIMARY KEY
    Name                    VARCHAR(10)
    Balance                 FLOAT
    Pending                 FLOAT
    Total                   FLOAT

Transactions
    ID                      INT PRIMARY KEY
    Account_ID              INT FOREIGN KEY
    Transaction_Date        DATE
    Post Date               DATE
    Description             VARCHAR(100)
    Category                VARCHAR(100)
    Amount                  FLOAT

Month
    ID                      INT PRIMARY KEY
    Name                    VARCHAR(100)

Projected_Income
    ID                      INT PRIMARY KEY
    Month_ID                INT
    Category                VARCHAR(100)
    Current                 FLOAT
    Projected               FLOAT
    Total                   FLOAT

Projected_Expenses
    ID                      INT PRIMARY KEY
    Month                   VARCHAR(50)
    Category                VARCHAR(100)
    Current                 FLOAT
    Projected               FLOAT
    Total                   FLOAT
```

### Views
* Account Balance
* Transactions
* Income
* Projected accounts
* Projected expenses