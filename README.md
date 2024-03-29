# node-streams

## 🤔 About the project
Node streams as its name suggests is a project focused on streaming Node. Its function is to upload files via http request, change the file data, and finally, save the file in aws S3.

---

## 🧪 Technologies used
<div style="display: inline_block">
  <img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg">
  <img align="center" alt="Aws S3" height="30" src="https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2021/01/30083957/aws-s3-logo.png">
</div>

---


## 🔥 How to run the project
Clone the project and access the project folder.
```bash
$ git clone git@github.com:PabloFerrari013/node-streams.git
$ cd node-streams
```
Add the .env file, and add the environment variables:
```bash
# Application port (default 3333)
PORT: 

# Your AWS access key:
AWS_ACCESS_KEY: 

# Your AWS secret key
AWS_SECRET_KEY: 

# Your bucket name:
AWS_BUCKET_NAME: 
```

To start it, follow the steps below:
```bash
# Install as dependencies
$ yarn 

# Start the project
yarn dev
```
Server is running in port 3333 🚀🔥
