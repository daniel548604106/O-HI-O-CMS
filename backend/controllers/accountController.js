const User = require('../models/userModel')


const updateMyPassword = async(req,res) =>{
  try{
    const {user:{_id}} = req
    const {oldPassword,newPassword} = req.body
    console.log('new',oldPassword,newPassword)
    const currentUser = await User.findById(_id)

    console.log('current',currentUser)
    // Check whether old password matches
    if(!(await currentUser.matchPassword(oldPassword))) return res.status(400).json({type: 'oldPassword',message: 'The old password is not correct,please try it again'})
   
    currentUser.password = newPassword
    // Save has to async or else might not be properly hashed
    await currentUser.save()
    console.log(currentUser)
    res.json({
      message: 'success'
    })
  }catch(error){
    console.log(error)
  }
}


const updateMyData = async(req,res) =>{
  try{

    console.log(req.body)
    const avatar = req.body.avatar
    const { name, account, website, biography, gender} = req.body
    const user = await User.findById(req.user._id)
    
    user.name = name 
    user.account = account 
    user.website = website 
    user.biography = biography 
    user.gender = gender 
    user.avatar = avatar
    await user.save()
    
    res.status(200).json({
      status: 'success',
      user
    })
  }catch(error){
    console.log(error)
  }
}


module.exports = {updateMyData,updateMyPassword}