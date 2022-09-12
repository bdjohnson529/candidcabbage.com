---
layout: home
---
This article explains how to interact with the postgres container.

## EC2 Deployment
Enter the container
```bash
sudo docker exec -it retool-onpremise_postgres_1 sh
```

Enter the postgres DB
```bash
psql -d $POSTGRES_DB -U $POSTGRES_USER
```