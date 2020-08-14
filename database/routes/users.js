const UsersModel = require("../models/users")


const users = (app) => {
  app.post('/users', async (req, res) => {
    var compareName = await UsersModel.find()
    for (var i in compareName) {
      if (req.body.name.toUpperCase().trim() == compareName[i].name.toUpperCase().trim()) {
        return res.status(500).json("Name already exist")
      }
    }
    if (req.body.name == "") {
      return res.status(400).json("Input field is required")
    }
    var newUser = new UsersModel({ name: req.body.name })
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