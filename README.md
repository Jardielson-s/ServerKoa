# ServerKoa
this is a simple server on Koa to deploy to AWS

### install dependencies
```
npm i koa koa-router koa-body @koa/cors

```
### script to run project
```
npm start

```
### create server on aws
<p>
go to run instance and select the operating system image, select the machine power, in the case t2.micro (free tier), put the tag name of Server and run the instance.
</p>

### after of creating the server on AWS

![alt text](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image2.jpeg)

<p>
now go connect with instance, for this click on the instance id, after click connect with instance, you will see this code:
  ```
  sudo ssh -i "keyAcess.pem" [name your manchine]
  ```
</p>
