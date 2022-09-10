---
layout: home
---
For those of us in customer facing roles, we manage a lot of information about our customers. Different teams at Retool use different software to support our customers : the sales team uses Salesforce as a CRM, the engineering team uses Linear as a ticketing sytem, and the support team uses a custom ticketing system built in Retool. On the sales engineering team at Retool, I found myself
needing ticketing software to track requests made by my customers.

Rather than purchase a ticketing system such as Linear, I wanted to build the ticketing system in Retool. Building the ticketing system from scratch gave me more flexibility to implement custom fields, and to design an interface which directly solved for my use case.

We encourage our customers to invest time into scoping their applications before they start building. Taking my own advice, I set out to answer a few questions before starting to build.

# Use case
I use the [agile approach](https://www.atlassian.com/agile/project-management/user-stories) to construct user stories. The user story has three parts : a **persona**, the **action** which that persona will take, and the **impact** which that action will have.

**As a [persona], I want to [do this] so that [this happens].**

In my case, the user story looked like this.

**As a sales engineer, I want to track the needs of my customers so that I can better teach them how to build software in Retool.**

I like writing out these use cases because they are the most concise way of getting to the purpose of the application. The use case also sets you up to measure the success, which I decided to do in the following way.

**I can scale my support with customers.**

Now that we have a clear use case, let's design the application.

## Data model
I like to start by whiteboarding the data model. The first place to start is by identifying existing data stores which will be integrated with our application. In my case, we have a Salesforce instance which I would like to extend. Our Salesforce instance has a `Contacts` table which represents each of our customers.

To extend this table, I'll create a `Tickets` table which joins to the `Contacts` table by [primary key](https://www.w3schools.com/sql/sql_primarykey.asp). When I create a ticket for a customer, I'll reference that customer's SFDC_ID.

```
tickets
    id
    sfdc_id
    status
    description
    date submitted
```

I built the database in Retool Database, so that I could quickly prototype it and not have to worry about executing SQL code on a server somewhere.

## Interfaces
Next, I like to break apart the application into a set of pages. By deconstructing the application, we can limit the amount of data which is loaded on any one page. This will decrease load times.

The two pages I want to build are :
* dashboard for all tickets
* view an individual ticket

## Mockups
Now, I built mockups in Retool.