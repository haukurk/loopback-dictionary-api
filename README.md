# Dictionary API for the Ordabok project.

API for the Ordabok project.

# Dependencies
To install all dependencies to do `npm install` in the root solution folder.

# Configuration

The following configuration files need to have your attention before starting it up.

* Datasources configuration `datasources.json.dist` 
* Main API configuration `config.json.dist`

When you are done editing changes, please rename them, so that they have the extension `.json`.

# API Explorer

The API is browseable with Swagger. To access the UI you can use go to `http://apibase.host/explorer`

# Build, Deploy and Logging

The best way to deploy and run the solution is to have a [Process Manager](https://github.com/strongloop/strong-pm) in place.

If you have it in place you can use the following deployment and build procedures.

To build the solution:
```
slc build
```

To deploy the solution: 
```
slc deploy http://[hostname.of.pm]:[PORT]
slc ctl -C http://[hostname.of.pm]:[PORT] env-set ordabokAPI n[pm_config_port]=[PortToListenOnRemoteServer]
slc ctl -C http://[hostname.of.pm]:[PORT] set-size ordabokAPI [NumberOfProccessOnRemoteServer]
```

To dump logs from the PM:
```
slc ctl -C http://[hostname.of.pm]:[PORT] log-dump ordabokAPI (--follow)
```
