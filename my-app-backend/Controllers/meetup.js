const Meetup = require("../Modals/Meetup");
const User = require('../Modals/User')


exports.postMeetup = async (req, res) => {
  const takenEmail = req.user.email;
  const name = req.body.enteredName;
  const address = req.body.enteredAddress;
  const description = req.body.enteredDescription;
  if (takenEmail) {
   
    const user = await User.findOne({ where: { email: takenEmail } })
    user.createMeetup({
      name: name,
      address: address,
      description: description,
    }).then(result => {
      console.log("created meetup succesfully")
    }).catch(err => {
      console.log(err);
      res.send(400).json("message:Something went wrong")
    });
    
    
    
  }
  res.json({message:'Successfull'});
};
