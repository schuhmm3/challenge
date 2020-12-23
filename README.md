# challenge

MERN app for challenge purpose

## Technologies / Stack

-   React
-   Node
-   Express
-   MySQL
-   Docker

## Set up project

-   Download de repo
-   execute docker-compose up to start the containers

## Fake credentials

-   user: basf
-   password: basf


# Evaluation

## Build & Run

Container build working.

Backend is crash-looping, looks like some module is missing

```
backend     | Error: Cannot find module '../queries'
```

Container status
```
schuhmm3@azure:~$ docker ps -a
CONTAINER ID        IMAGE                   COMMAND                  CREATED              STATUS                         PORTS                               NAMES
473ca7f05408        challenge_frontend      "docker-entrypoint.s…"   About a minute ago   Up About a minute              0.0.0.0:3001->3000/tcp              frontend
0ca28f51efb9        challenge_backend       "docker-entrypoint.s…"   About a minute ago   Restarting (1) 7 seconds ago                                       backend
2b7ecb317e74        mysql:5.7               "docker-entrypoint.s…"   About a minute ago   Up About a minute              0.0.0.0:3306->3306/tcp, 33060/tcp   mysql
```

Full error log
```
schuhmm3@azure:~/challenges/frontend/nms/challenge$ docker-compose up
Creating network "challenge_app-network" with driver "bridge"
Pulling db (mysql:5.7)...
5.7: Pulling from library/mysql
6ec7b7d162b2: Pull complete
fedd960d3481: Pull complete
7ab947313861: Pull complete
64f92f19e638: Pull complete
3e80b17bff96: Pull complete
014e976799f9: Pull complete
59ae84fee1b3: Pull complete
7d1da2a18e2e: Pull complete
301a28b700b9: Pull complete
529dc8dbeaf3: Pull complete
bc9d021dc13f: Pull complete
Digest: sha256:c3a567d3e3ad8b05dfce401ed08f0f6bf3f3b64cc17694979d5f2e5d78e10173
Status: Downloaded newer image for mysql:5.7
Creating mysql ... done
Creating backend  ... done
Creating frontend ... done
Attaching to mysql, frontend, backend
frontend    |
frontend    | > frontend@0.1.0 start /src
frontend    | > react-scripts start
frontend    |
mysql       | 2020-12-23 10:30:33+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 5.7.32-1debian10 started.
mysql       | 2020-12-23 10:30:33+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
mysql       | 2020-12-23 10:30:33+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 5.7.32-1debian10 started.
mysql       | 2020-12-23 10:30:33+00:00 [Note] [Entrypoint]: Initializing database files
mysql       | 2020-12-23T10:30:33.356767Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
mysql       | 2020-12-23T10:30:35.520506Z 0 [Warning] InnoDB: New log files created, LSN=45790
mysql       | 2020-12-23T10:30:35.759611Z 0 [Warning] InnoDB: Creating foreign key constraint system tables.
mysql       | 2020-12-23T10:30:35.842245Z 0 [Warning] No existing UUID has been found, so we assume that this is the first time that this server has been started. Generating a new UUID: e4abdb1e-4509-11eb-84a0-0242ac130002.
mysql       | 2020-12-23T10:30:35.925270Z 0 [Warning] Gtid table is not ready to be used. Table 'mysql.gtid_executed' cannot be opened.
mysql       | 2020-12-23T10:30:37.073388Z 0 [Warning] CA certificate ca.pem is self signed.
mysql       | 2020-12-23T10:30:37.395235Z 1 [Warning] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_37_784Z-debug.log
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_39_153Z-debug.log
frontend    | ℹ ｢wds｣: Project is running at http://172.19.0.3/
frontend    | ℹ ｢wds｣: webpack output is served from
frontend    | ℹ ｢wds｣: Content not from webpack is served from /src/public
frontend    | ℹ ｢wds｣: 404s will fallback to /
frontend    | Starting the development server...
frontend    |
backend exited with code 1
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_40_572Z-debug.log
backend exited with code 1
mysql       | 2020-12-23 10:30:41+00:00 [Note] [Entrypoint]: Database files initialized
mysql       | 2020-12-23 10:30:41+00:00 [Note] [Entrypoint]: Starting temporary server
mysql       | 2020-12-23 10:30:41+00:00 [Note] [Entrypoint]: Waiting for server startup
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
mysql       | 2020-12-23T10:30:42.163025Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
mysql       | 2020-12-23T10:30:42.165421Z 0 [Note] mysqld (mysqld 5.7.32) starting as process 79 ...
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
mysql       | 2020-12-23T10:30:42.169628Z 0 [Note] InnoDB: PUNCH HOLE support available
mysql       | 2020-12-23T10:30:42.169652Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
mysql       | 2020-12-23T10:30:42.169657Z 0 [Note] InnoDB: Uses event mutexes
mysql       | 2020-12-23T10:30:42.169661Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
mysql       | 2020-12-23T10:30:42.169666Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
mysql       | 2020-12-23T10:30:42.169671Z 0 [Note] InnoDB: Using Linux native AIO
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
mysql       | 2020-12-23T10:30:42.170024Z 0 [Note] InnoDB: Number of pools: 1
mysql       | 2020-12-23T10:30:42.170196Z 0 [Note] InnoDB: Using CPU crc32 instructions
mysql       | 2020-12-23T10:30:42.172409Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_42_169Z-debug.log
mysql       | 2020-12-23T10:30:42.181368Z 0 [Note] InnoDB: Completed initialization of buffer pool
mysql       | 2020-12-23T10:30:42.184494Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
mysql       | 2020-12-23T10:30:42.197486Z 0 [Note] InnoDB: Highest supported file format is Barracuda.
mysql       | 2020-12-23T10:30:42.209408Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables
mysql       | 2020-12-23T10:30:42.209485Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
mysql       | 2020-12-23T10:30:42.422119Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
mysql       | 2020-12-23T10:30:42.423168Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.
mysql       | 2020-12-23T10:30:42.423197Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.
mysql       | 2020-12-23T10:30:42.424395Z 0 [Note] InnoDB: 5.7.32 started; log sequence number 2747371
mysql       | 2020-12-23T10:30:42.424564Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
mysql       | 2020-12-23T10:30:42.425443Z 0 [Note] Plugin 'FEDERATED' is disabled.
mysql       | 2020-12-23T10:30:42.426595Z 0 [Note] InnoDB: Buffer pool(s) load completed at 201223 10:30:42
mysql       | 2020-12-23T10:30:42.433788Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.
mysql       | 2020-12-23T10:30:42.433819Z 0 [Note] Skipping generation of SSL certificates as certificate files are present in data directory.
mysql       | 2020-12-23T10:30:42.434702Z 0 [Warning] CA certificate ca.pem is self signed.
mysql       | 2020-12-23T10:30:42.434758Z 0 [Note] Skipping generation of RSA key pair as key files are present in data directory.
mysql       | 2020-12-23T10:30:42.440831Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
mysql       | 2020-12-23T10:30:42.455213Z 0 [Note] Event Scheduler: Loaded 0 events
mysql       | 2020-12-23T10:30:42.455580Z 0 [Note] mysqld: ready for connections.
mysql       | Version: '5.7.32'  socket: '/var/run/mysqld/mysqld.sock'  port: 0  MySQL Community Server (GPL)
backend exited with code 1
mysql       | 2020-12-23 10:30:42+00:00 [Note] [Entrypoint]: Temporary server started.
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
mysql       | Warning: Unable to load '/usr/share/zoneinfo/iso3166.tab' as time zone. Skipping it.
mysql       | Warning: Unable to load '/usr/share/zoneinfo/leap-seconds.list' as time zone. Skipping it.
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_44_137Z-debug.log
backend exited with code 1
mysql       | Warning: Unable to load '/usr/share/zoneinfo/zone.tab' as time zone. Skipping it.
mysql       | Warning: Unable to load '/usr/share/zoneinfo/zone1970.tab' as time zone. Skipping it.
mysql       | 2020-12-23 10:30:47+00:00 [Note] [Entrypoint]: Creating database basf
mysql       | 2020-12-23 10:30:47+00:00 [Note] [Entrypoint]: Creating user me
mysql       | 2020-12-23 10:30:47+00:00 [Note] [Entrypoint]: Giving user me access to schema basf
mysql       |
mysql       | 2020-12-23 10:30:47+00:00 [Note] [Entrypoint]: /usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/chemicalData.sql
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_47_558Z-debug.log
mysql       |
mysql       |
mysql       | 2020-12-23 10:30:47+00:00 [Note] [Entrypoint]: Stopping temporary server
mysql       | 2020-12-23T10:30:47.616836Z 0 [Note] Giving 0 client threads a chance to die gracefully
mysql       | 2020-12-23T10:30:47.616875Z 0 [Note] Shutting down slave threads
mysql       | 2020-12-23T10:30:47.616880Z 0 [Note] Forcefully disconnecting 0 remaining clients
mysql       | 2020-12-23T10:30:47.616886Z 0 [Note] Event Scheduler: Purging the queue. 0 events
mysql       | 2020-12-23T10:30:47.616949Z 0 [Note] Binlog end
mysql       | 2020-12-23T10:30:47.617700Z 0 [Note] Shutting down plugin 'ngram'
mysql       | 2020-12-23T10:30:47.617725Z 0 [Note] Shutting down plugin 'partition'
mysql       | 2020-12-23T10:30:47.617731Z 0 [Note] Shutting down plugin 'BLACKHOLE'
mysql       | 2020-12-23T10:30:47.617736Z 0 [Note] Shutting down plugin 'ARCHIVE'
mysql       | 2020-12-23T10:30:47.617740Z 0 [Note] Shutting down plugin 'PERFORMANCE_SCHEMA'
mysql       | 2020-12-23T10:30:47.617811Z 0 [Note] Shutting down plugin 'MRG_MYISAM'
mysql       | 2020-12-23T10:30:47.617826Z 0 [Note] Shutting down plugin 'MyISAM'
mysql       | 2020-12-23T10:30:47.617837Z 0 [Note] Shutting down plugin 'INNODB_SYS_VIRTUAL'
mysql       | 2020-12-23T10:30:47.617843Z 0 [Note] Shutting down plugin 'INNODB_SYS_DATAFILES'
mysql       | 2020-12-23T10:30:47.617847Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLESPACES'
mysql       | 2020-12-23T10:30:47.617851Z 0 [Note] Shutting down plugin 'INNODB_SYS_FOREIGN_COLS'
mysql       | 2020-12-23T10:30:47.617855Z 0 [Note] Shutting down plugin 'INNODB_SYS_FOREIGN'
mysql       | 2020-12-23T10:30:47.617859Z 0 [Note] Shutting down plugin 'INNODB_SYS_FIELDS'
mysql       | 2020-12-23T10:30:47.617863Z 0 [Note] Shutting down plugin 'INNODB_SYS_COLUMNS'
mysql       | 2020-12-23T10:30:47.617866Z 0 [Note] Shutting down plugin 'INNODB_SYS_INDEXES'
mysql       | 2020-12-23T10:30:47.617870Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLESTATS'
mysql       | 2020-12-23T10:30:47.617874Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLES'
mysql       | 2020-12-23T10:30:47.617878Z 0 [Note] Shutting down plugin 'INNODB_FT_INDEX_TABLE'
mysql       | 2020-12-23T10:30:47.617882Z 0 [Note] Shutting down plugin 'INNODB_FT_INDEX_CACHE'
mysql       | 2020-12-23T10:30:47.617886Z 0 [Note] Shutting down plugin 'INNODB_FT_CONFIG'
mysql       | 2020-12-23T10:30:47.617890Z 0 [Note] Shutting down plugin 'INNODB_FT_BEING_DELETED'
mysql       | 2020-12-23T10:30:47.617894Z 0 [Note] Shutting down plugin 'INNODB_FT_DELETED'
mysql       | 2020-12-23T10:30:47.617898Z 0 [Note] Shutting down plugin 'INNODB_FT_DEFAULT_STOPWORD'
mysql       | 2020-12-23T10:30:47.617902Z 0 [Note] Shutting down plugin 'INNODB_METRICS'
mysql       | 2020-12-23T10:30:47.617906Z 0 [Note] Shutting down plugin 'INNODB_TEMP_TABLE_INFO'
mysql       | 2020-12-23T10:30:47.617910Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_POOL_STATS'
mysql       | 2020-12-23T10:30:47.617914Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_PAGE_LRU'
mysql       | 2020-12-23T10:30:47.617918Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_PAGE'
mysql       | 2020-12-23T10:30:47.617923Z 0 [Note] Shutting down plugin 'INNODB_CMP_PER_INDEX_RESET'
mysql       | 2020-12-23T10:30:47.617927Z 0 [Note] Shutting down plugin 'INNODB_CMP_PER_INDEX'
mysql       | 2020-12-23T10:30:47.617931Z 0 [Note] Shutting down plugin 'INNODB_CMPMEM_RESET'
mysql       | 2020-12-23T10:30:47.617935Z 0 [Note] Shutting down plugin 'INNODB_CMPMEM'
mysql       | 2020-12-23T10:30:47.617940Z 0 [Note] Shutting down plugin 'INNODB_CMP_RESET'
mysql       | 2020-12-23T10:30:47.617944Z 0 [Note] Shutting down plugin 'INNODB_CMP'
mysql       | 2020-12-23T10:30:47.617948Z 0 [Note] Shutting down plugin 'INNODB_LOCK_WAITS'
mysql       | 2020-12-23T10:30:47.617952Z 0 [Note] Shutting down plugin 'INNODB_LOCKS'
mysql       | 2020-12-23T10:30:47.617956Z 0 [Note] Shutting down plugin 'INNODB_TRX'
mysql       | 2020-12-23T10:30:47.617961Z 0 [Note] Shutting down plugin 'InnoDB'
mysql       | 2020-12-23T10:30:47.618024Z 0 [Note] InnoDB: FTS optimize thread exiting.
mysql       | 2020-12-23T10:30:47.618253Z 0 [Note] InnoDB: Starting shutdown...
mysql       | 2020-12-23T10:30:47.718468Z 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool
mysql       | 2020-12-23T10:30:47.718878Z 0 [Note] InnoDB: Buffer pool(s) dump completed at 201223 10:30:47
backend exited with code 1
mysql       | 2020-12-23T10:30:49.333228Z 0 [Note] InnoDB: Shutdown completed; log sequence number 13719141
mysql       | 2020-12-23T10:30:49.335103Z 0 [Note] InnoDB: Removed temporary tablespace data file: "ibtmp1"
mysql       | 2020-12-23T10:30:49.335137Z 0 [Note] Shutting down plugin 'MEMORY'
mysql       | 2020-12-23T10:30:49.335143Z 0 [Note] Shutting down plugin 'CSV'
mysql       | 2020-12-23T10:30:49.335148Z 0 [Note] Shutting down plugin 'sha256_password'
mysql       | 2020-12-23T10:30:49.335151Z 0 [Note] Shutting down plugin 'mysql_native_password'
mysql       | 2020-12-23T10:30:49.335317Z 0 [Note] Shutting down plugin 'binlog'
mysql       | 2020-12-23T10:30:49.336004Z 0 [Note] mysqld: Shutdown complete
mysql       |
mysql       | 2020-12-23 10:30:49+00:00 [Note] [Entrypoint]: Temporary server stopped
mysql       |
mysql       | 2020-12-23 10:30:49+00:00 [Note] [Entrypoint]: MySQL init process done. Ready for start up.
mysql       |
mysql       | 2020-12-23T10:30:49.821408Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
mysql       | 2020-12-23T10:30:49.823697Z 0 [Note] mysqld (mysqld 5.7.32) starting as process 1 ...
mysql       | 2020-12-23T10:30:49.827714Z 0 [Note] InnoDB: PUNCH HOLE support available
mysql       | 2020-12-23T10:30:49.827741Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
mysql       | 2020-12-23T10:30:49.827745Z 0 [Note] InnoDB: Uses event mutexes
mysql       | 2020-12-23T10:30:49.827748Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
mysql       | 2020-12-23T10:30:49.827751Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
mysql       | 2020-12-23T10:30:49.827755Z 0 [Note] InnoDB: Using Linux native AIO
mysql       | 2020-12-23T10:30:49.828054Z 0 [Note] InnoDB: Number of pools: 1
mysql       | 2020-12-23T10:30:49.828184Z 0 [Note] InnoDB: Using CPU crc32 instructions
mysql       | 2020-12-23T10:30:49.830408Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
mysql       | 2020-12-23T10:30:49.839748Z 0 [Note] InnoDB: Completed initialization of buffer pool
mysql       | 2020-12-23T10:30:49.842770Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
mysql       | 2020-12-23T10:30:49.854756Z 0 [Note] InnoDB: Highest supported file format is Barracuda.
mysql       | 2020-12-23T10:30:49.878779Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables
mysql       | 2020-12-23T10:30:49.878901Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
mysql       | 2020-12-23T10:30:50.073430Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
mysql       | 2020-12-23T10:30:50.074654Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.
mysql       | 2020-12-23T10:30:50.074677Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.
mysql       | 2020-12-23T10:30:50.075803Z 0 [Note] InnoDB: 5.7.32 started; log sequence number 13719141
mysql       | 2020-12-23T10:30:50.075995Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
mysql       | 2020-12-23T10:30:50.076226Z 0 [Note] Plugin 'FEDERATED' is disabled.
mysql       | 2020-12-23T10:30:50.079849Z 0 [Note] InnoDB: Buffer pool(s) load completed at 201223 10:30:50
mysql       | 2020-12-23T10:30:50.082970Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.
mysql       | 2020-12-23T10:30:50.082990Z 0 [Note] Skipping generation of SSL certificates as certificate files are present in data directory.
mysql       | 2020-12-23T10:30:50.083629Z 0 [Warning] CA certificate ca.pem is self signed.
mysql       | 2020-12-23T10:30:50.083675Z 0 [Note] Skipping generation of RSA key pair as key files are present in data directory.
mysql       | 2020-12-23T10:30:50.084403Z 0 [Note] Server hostname (bind-address): '*'; port: 3306
mysql       | 2020-12-23T10:30:50.084536Z 0 [Note] IPv6 is available.
mysql       | 2020-12-23T10:30:50.084565Z 0 [Note]   - '::' resolves to '::';
mysql       | 2020-12-23T10:30:50.084604Z 0 [Note] Server socket created on IP: '::'.
mysql       | 2020-12-23T10:30:50.089894Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
mysql       | 2020-12-23T10:30:50.099565Z 0 [Note] Event Scheduler: Loaded 0 events
mysql       | 2020-12-23T10:30:50.099943Z 0 [Note] mysqld: ready for connections.
mysql       | Version: '5.7.32'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
frontend    | Compiled successfully!
frontend    |
frontend    | You can now view frontend in the browser.
frontend    |
frontend    |   Local:            http://localhost:3000
frontend    |   On Your Network:  http://172.19.0.3:3000
frontend    |
frontend    | Note that the development build is not optimized.
frontend    | To create a production build, use npm run build.
frontend    |
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_51_664Z-debug.log
backend exited with code 1
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_30_58_996Z-debug.log
backend exited with code 1
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_31_12_716Z-debug.log
backend exited with code 1
backend     |
backend     | > backend@1.0.0 start /src
backend     | > node server
backend     |
backend     | internal/modules/cjs/loader.js:818
backend     |   throw err;
backend     |   ^
backend     |
backend     | Error: Cannot find module '../queries'
backend     | Require stack:
backend     | - /src/controllers/chemicalController.js
backend     | - /src/routes/routes.js
backend     | - /src/server.js
backend     |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:667:27)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19)
backend     |     at require (internal/modules/cjs/helpers.js:74:18)
backend     |     at Object.<anonymous> (/src/controllers/chemicalController.js:2:17)
backend     |     at Module._compile (internal/modules/cjs/loader.js:999:30)
backend     |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
backend     |     at Module.load (internal/modules/cjs/loader.js:863:32)
backend     |     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
backend     |     at Module.require (internal/modules/cjs/loader.js:887:19) {
backend     |   code: 'MODULE_NOT_FOUND',
backend     |   requireStack: [
backend     |     '/src/controllers/chemicalController.js',
backend     |     '/src/routes/routes.js',
backend     |     '/src/server.js'
backend     |   ]
backend     | }
backend     | npm ERR! code ELIFECYCLE
backend     | npm ERR! errno 1
backend     | npm ERR! backend@1.0.0 start: `node server`
backend     | npm ERR! Exit status 1
backend     | npm ERR!
backend     | npm ERR! Failed at the backend@1.0.0 start script.
backend     | npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
backend     |
backend     | npm ERR! A complete log of this run can be found in:
backend     | npm ERR!     /root/.npm/_logs/2020-12-23T10_31_39_245Z-debug.log
backend exited with code 1
^CGracefully stopping... (press Ctrl+C again to force)
Stopping frontend ... done
Stopping backend  ... done
Stopping mysql    ... done
schuhmm3@azure:~/challenges/frontend/nms/challenge$

```
