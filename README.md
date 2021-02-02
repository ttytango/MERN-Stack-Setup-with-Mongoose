# MERN-Stack-Setup-with-Mongoose
Node/Express and Mongodb basic setup and routing for a MERN backend

## To use
- Install dependencies with the command:
```
npm install
```
- Setup an account with MongoDB Atlas and connect a new cluster to your application. Remember to whitelist your IP by allowing connections from your current IP address when prompted on creating your cluster (unless you require a different security setup.
- Create a .env folder in the same directory as server.js (and make sure this is added to .gitignore for security reasons)
- Create a variable in .env named ATLAS_URI which includes the connection URI provided to you when you connect the cluster. 
You need to include the your mongoDB username and password, as well as the database name you wish to create and use in your project within this URI
It should look similar to the following format:
```
ATLAS_URI=mongodb+srv://<DBusername>:<password>@cluster0.bnsd6.mongodb.net/<DBname>?w=majority
```
- You can then run the server and database using the single command
```
nodemon
```
- You should test the database with an application such as Postman where you can perform CRUD operations

NB: I have created schema and API endpoints for users and todos in this setup, for a simple todo list application.
