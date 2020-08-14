const UsersModel = require("../models/users")


const users = (app) => {
  app.post('/users', async (req, res) => {
    var compareEmail = await UsersModel.find()
    for (var i in compareEmail) {
      if (req.body.email.toUpperCase().trim() == compareEmail[i].email.toUpperCase().trim()) {
        return res.status(500).json("Name already exist")
      }
    }
    if (req.body.email == "") {
      return res.status(400).json("Input field is required")
    }
    var newUser = new UsersModel({ email: req.body.email })
    try {
      const dbResult = await newUser.save();
      console.log(dbResult)
      res.send(201)
    } catch (e) {
      console.log(e)
    }

  })

}

module.exports = { users };