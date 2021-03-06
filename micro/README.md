
Run the following commands:

```
git clone git@github.com:dashersw/cote-workshop.git
cd cote-workshop
npm install
node init-db.js
```

## Getting the system up and running

There are four backend services, an admin interface and an end-user interface.

### Quickstart

For the quickest start, have [PM2](http://pm2.keymetrics.io) installed globally and then just type:

```
pm2 start cote-workshop.json
```

This will run all the 6 services you need, and you can monitor your services with `pm2 monit` or use any pm2 commands at your disposal.

Admin interface will be available in [http://localhost:5000](http://localhost:5000)

End user interface will be available in [http://localhost:5001](http://localhost:5001)

Monitoring will be available in [http://localhost:5555](http://localhost:5555)

Navigate to the admin and (multiple) end user interfaces and add / delete / buy some products to see everything updating in real time!

### Manual start

Run the admin interface:

```
node admin/server
```

Admin interface will be available in [http://localhost:5000](http://localhost:5000)

Run the end user interface in a separate terminal window (or tab):

```
node end-user/server
```

End user interface will be available in [http://localhost:5001](http://localhost:5001)

Now run the services in separate terminal windows (or tabs):

```
node services/payment-service
node services/product-service
node services/purchase-service
node services/user-service
```

Navigate to the admin and (multiple) end user interfaces and add / delete / buy some products to see everything updating in real time!

## Monitoring

There's a built-in monitor service which lets you visualize the connections between microservices. The monitoring service is automatically started via pm2, or if you want to manually start it, run:

```
node monitor.js
```

It's a simple monitoring GUI, and will be available in [http://localhost:5555](http://localhost:5555)

## Running locally with host names

This repo includes a proxy service which binds on port 80 to host the application via certain host names.

The proxy supports these virtual hosts;

`http://local-admin.cotejs.org` for the admin interface and redirects requests to `localhost:5000`.

`http://local-end-user.cotejs.org` for the end user interface and redirects requests to `localhost:5001`.

`http://local-monitoring.cotejs.org` for the monitoring interface and redirects requests to `localhost:5555`.

Then you have to modify your `/etc/hosts` file to include `127.0.0.1 local-admin.cotejs.org local-end-user.cotejs.org local-monitoring.cotejs.org`. Now when you visit either of these addresses in your browser, you will be redirected to the respective service.

## Docker installation

This repository includes a full-featured `docker-compose.yml` to start all the necessary services including a PostgreSQL database via Docker.

Run the following to launch all services;
```
docker-compose up
```

This will build necessary local images and then launch a cluster of services. If you edit your `/etc/hosts` file to accomodate the given domain names, you can interact with the application via your browser.
