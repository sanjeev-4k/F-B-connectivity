const express= require('express')
const UserModel = require('../models/user')
const app=express();

app.post('/user', async (req,res)=>{
    const user= new UserModel(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }

});

app.patch('/user/:id', async(req,res)=>{
    try{
        await UserModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send("Done Patching!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});

app.post('/user/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (user) {
        if (password === user.password) {
          return res.status(200).send({ message: 'Logged in successfully!!' });
        } else {
          return res.status(400).send({ message: 'Wrong password!! Try again' });
        }
      } else {
        return res.status(404).send({ message: 'Sign up first!!' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  });
app.delete('/user/:id', async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Done Deleting!!")
    }catch(error){
        res.status(500).send("Error: ",error)
    }
});

module.exports = app;