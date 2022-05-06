---
layout: home
---
# Retool Deployment Patterns
This site offers deployment patterns for [retool-onpremise](https://github.com/tryretool/retool-onpremise). One common deployment pattern is to have multiple instances for `prod`, `staging` and `dev`. [Environments](https://docs.retool.com/docs/using-multiple-environments) allow you to configure different endpoints for the same resource - for example, you can create one resource with three different endpoints for `prod`, `staging` and `dev`. App developers can then use the `dev` or `staging` resources when they are developing, and only switch to the `prod` resource once they have tested the new features.

One issue with this approach is the lack of any sort of barrier when developers are switching to `prod` resources. If a user has access to a resource, they have access to all environments of that resource. Ideally, app developers would have a guarantee that a new feature will not be deployed into production until it has been tested successfully.

Deploying multiple instances of Retool, in conjunction with protected apps, can solve this problem. Developers can add new features in the `test` instance, and test new feature branches on `test` and `staging` before merging the feature branch into the master branch. After the feature branch has been tested, and merged, the code can be promoted to the `prod` instance.

## Multi-instance deployments
Follow the links below to access the different instances of this deployment.
<br>
<button onclick="window.location.href='https://prod.candidcabbage.com'">Production</button>
<br>
<button onclick="window.location.href='https://prod.candidcabbage.com'">Staging</button>
<br>
<button onclick="window.location.href='https://prod.candidcabbage.com'">Dev</button>

<br>

## AWS Architecture
This architecture was deployed on AWS, using EC2 for the Retool deployments and Postgres RDS for resources.

<img src="{{ site.baseurl }}/assets/img/multiple-instances.png" alt="Ski Mountain">
  
