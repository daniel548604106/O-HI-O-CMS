const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')
 const postLogin = async(req,res) =>{
  try{
    const { email,password} = req.body.data
    console.log(email,password)
    if(!email || !password) return res.status(401).json({message:'Please provide email and password'})

    // Check if user exists
    const user = await User.findOne({email})
    if(!user) return res.status(401).json({message:'This email address is not found'})

    // Validate password
    // if(!user.matchPassword) return res.status(401).json({message:'Invalid email or password'})
    if(!(user.roles.includes('seller'|| 'admin')) ) return res.status(401).json({message: 'You are currently not a vendor, please sign up'})
    console.log(user)
    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      sameSite: "strict",
});

     res.json({
      status: 'success',
      user,
      token: generateToken(user._id),
    })
    // if (user && (await user.matchPassword(password))) {
    //   return res.json({
    //     status: 'success',
    //     user,
    //     token: generateToken(user._id),
    //   })
    // }

  }catch(error){
    console.log(error)
  }
}


const postSignup = async (req, res, next) => {
  try{
    const { name , email, password} = req.body
    const account = email.split('@')[0]
    console.log(name,email,password)
    // check if email exists
    const userExists = await User.findOne({email})
    if(userExists){
      return next(new Error('This account already exists!'))
    }
    const newUser = await User.create({name,email,password,account})
    console.log(newUser)
    res.status(200).json({
      status: 'success',
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      account: newUser.account,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  }catch(error){
    console.log(error)
  }
}

module.exports = {postLogin,postSignup}


