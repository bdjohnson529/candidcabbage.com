---
layout: home
---
Custom CRM / LMS for storing customer interactions, and matching customers with learning resources.

First, let's scope the application.


## Business goal
Scale interactions with customers.

## User story

* User can create and resolve bugs for customers.
* User can connect customers with learning resources.


## Data model
Customer
* sfdc_id
* plan
* description
* last slack
* last email
* last meeting
* next meeting
* next meeting type

Bug
* id
* customer_id
* slack_link
* email_link
* status

Enablement_events
* customer.sfdc_id
* resource.id
* date
* notes

Enablement
* id
* link
* type
* name


Notice how we `enablement_events` is a join table between `enablement` and `customer`, with an added `date` field.

## Requirements
Users
* View all customers
* View one customer
    * Submit bug
    * View enablement options
    * Log enablement event

Admin
* Edit enablement events

## Pages
Each page will become an individual application. This architecture has the advantage of distributing the data across different pages, which will improve performance.
```
/customers
/customers/<:id>
/enablement/
/enablement/<:id>
```