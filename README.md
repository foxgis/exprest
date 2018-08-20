# exprest

> A simple RESTful API server boilerplate using express


## Features

- Provide versioned API endpoint.
- Support `.env` enviroment file.
- Use `pkg` to package as binary files.


## Getting started

> You need to install Nodejs(>= 6) and Yarn.

```
yarn          // Install dependencies
yarn start    // Start the server, the default endpoint is localhost:3000/api
yarn test     // Test
yarn dist     // Package as binary files.
```


## API

API endpoint is constructed as follows:

```
localhost:3000/api/{service}/{version}
```

Avaliable APIs:

```
localhost:3000/api/hello/v1
```
