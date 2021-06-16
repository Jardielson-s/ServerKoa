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
now go connect with instance, for this click on the instance id, after click connect with instance, you will see this code:</p>

  ```
  sudo ssh -i "keyAcess.pem" [name your manchine]
  ```
  
  <p>open your terminal and enter code above, will have a question enter yes.</p>
  
  ###  coonnecting with the server on AWS  
  
  ![alt line](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image4.jpeg)
  
  
  <p>at the AWS machine terminal enter the code below:</p>
  
  ```
  sudo apt-get upgrade
  sudo apt-get update
  sudo apt-get install apache2
  sudo apt-get install nodejs
  sudo apt-get install npm
  sudo service apache2 status # check if apache is running
  sudo node --version # check node version
  sudo npm --version # check npm version
  ```
  
 ### terminal image
   
 ![alt line](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image10.jpeg)
  
 ![alt line](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image8.jpeg)
 
 <p> create code folder, then type git clone "link of github project":</p>
 
 ```
 mkdir code && cd code
 git clone https://github.com/Jardielson-s/ServerKoa.git # the machine already comes with git installed
 npm i -d pm2  # install pm2 as global dependent
 cd ServerKoa && cd src # go to the folder where the server.js file is.
 pm2 start server.js # server management process
 ```
 ### server management process image
 
 ![alt line](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image7.jpeg)
 
 <p> Lastly, deploy test with insomin</p>
 
 ![alt line](https://github.com/Jardielson-s/ServerKoa/blob/main/Images/image9.jpeg)
