# Vite + TypeScript + gRPC-Web

Example of Vite + TypeScript + gRPC-Web

## How it was created

1. create a project

```
$ npm create vite@latest
✔ Project name: … example-vite-typescript-grpc-web
✔ Select a framework: › Vanilla
✔ Select a variant: › TypeScript
```

2. create a workspace for gRPC-Web

```
$ npm init -w packages/protopb
$ cat packages/protopb/package.json
{
  "name": "protopb",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "commonjs",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

3. generate gRPC-Web codes from Protocol Buffers definitions

```
$ protoc -I proto \
  --js_out=import_style=commonjs:packages/protopb \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcweb:packages/protopb \
  hello.proto
```

4. update vite.config.ts

```
$ cat vite.config.ts
```

5. install necessary pacakges

```
$ npm install --save-dev google-protobuf grpc-web
```
