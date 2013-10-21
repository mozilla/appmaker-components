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


### Running in Development mode

#### Configuration for Node

Copy and edit your .env file. -- This should never be committed to the repo.

```
cp sample.env .env
```

The `.env` file contains a few options:

`PORT`: Port on which this server will be listening.
`ENV`: `development` or `production` are valid entries, and the former will expose '/tests'.
`DISABLE_CACHE`: Controls Mu2's cache flag. A non-null entry will let caching occur.

A short example of a complete `.env` file:
```
PORT=7000
ASSET_HOST=https://appmaker.mozillalabs.com/
DISABLE_CACHE=anythingnotnull
```

### Start the Server

```
foreman start
```

or

```
foreman start -p <PORT>
```

If you need foreman:

```
sudo gem install foreman
```
