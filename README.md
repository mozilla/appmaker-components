appmaker-components
===================

Issues for this project are currently tracked at https://github.com/mozilla/appmaker/issues

Running the component server
----------------------------

### Dependencies

Execute `npm install` in the application directory:


### Running in Development mode

#### Configuration for Node

Copy and edit your .env file. -- _This should never be committed to the repo.

```
cp sample.env .env
```

The `.env` file contains a few options:
```
PORT= Port on which this server should be listening.
ENV= Mode in which the server runs. 'development' or 'production' are valid entries -- the former will expose '/tests'.
DISABLE_CACHE= Controls Mu2's cache flag. A non-null entry will let caching occur.
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

