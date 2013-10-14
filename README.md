appmaker-components
===================

Issues for this project are currently tracked at https://github.com/mozilla/appmaker/issues

Running the Server
------------------

### Dependencies

Execute `npm install` in the application directory:

Get the submodules:

```
git submodule update --init --recursive
```


You'll also need to run the appmaker-components server, located at https://github.com/mozilla/appmaker-components

### Running in Development mode

#### Configuration for Node

Copy and edit your .env file. -- This should never be committed to the repo.

```
cp sample.env .env
```

A short explanation of a complete `.env` file:
```
PORT=7000
ASSET_HOST=https://appmaker.mozillalabs.com/
DISABLE_CACHE=anythingnotnull
```

### Start the Server

```
foreman start
```

If you need foreman:

```
sudo gem install foreman
```
