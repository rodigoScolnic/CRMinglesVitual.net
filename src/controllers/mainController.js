const db = require('../db/models')
const moment = require('moment')

module.exports = {

    index: (req,res) => {

        db.contacts.findAll()
            .then(contact => {
                let lastContact = contact[contact.length - 1]
                let contactsCont = contact.length
                
               res.render('index' , {lastContact, contactsCont})
            }).catch(err => console.log(err))

            
    } ,

    
    contactSave: (req,res) => {

        const { firstname , lastname , email , phone, isStudent} = req.body

        db.contacts.create({
            firstname: firstname ,
            lastname: lastname ,
            email: email ,
            phone: phone,
            isStudent: isStudent
            
        })
    },

    showContacts: (req,res) => {

        db.contacts.findAll()
            .then(contacts => res.render('contacts' , {contacts}))
    }
    
}