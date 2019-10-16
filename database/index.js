const mongoose = require('mongoose');
const mongo_uri ='mongodb+srv://leo:tenazaz9300@tenazaz-q84o2.mongodb.net/vecinos?retryWrites=true&w=majority';

mongoose.connect(
    mongo_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(()=>console.log('Connectd to Mongo Atlas'))
    .catch(()=>console.log('Error connectiong to Mongo'));