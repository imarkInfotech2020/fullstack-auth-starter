## Docker Images

Edit [docker-compose.yml](../../docker-compose.yml) at the root of the project and change the docker organisation name and as well as the version of the images for the **api** and **ui**

Change the frontend and backend version in their respective _package.json_

### Build

To build the **api** and **ui** images

    $ docker-compose build

### Run the whole system

Before pushing the images to the repository, let's start whole system with the api, ui, postgres and redis:

```
$ docker-compose up -d
Creating network "imark-starter_net" with the default driver
Creating imark-starter_pg_1    ... done
Creating imark-starter_redis_1 ... done
Creating imark-starter_api_1   ... done
Creating imark-starter_ui_1    ... done
```

Open a web browser at the given address:

    $ open http://localhost:3001/

If something goes wrong, check the _backend_ logs:

    $ docker logs imark-starter_api_1

### Push

Push the images to the docker repository:

    $ docker-compose push
