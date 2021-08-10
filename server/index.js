const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')

//express app
const app = express()
var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));
require("./routes/routes")(app);
//connect to mongodb
const dbURI = 'mongodb+srv://hussain_98:090078601@security.2iyja.mongodb.net/security?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log("Connected to Database"), app.listen(4000) })
    .catch((error) => { console.log(error) })

// Creating a Collection and then fetching it
app.get('/createUser', (req, res) => {
    const user = new User({
        userId: 'Guard2',
        currentLocation: 'London',
        name: 'David'
    })

    user.save()
        .then((result) => { res.send(result) })
        .catch((err) => { console.log(err) })
})

