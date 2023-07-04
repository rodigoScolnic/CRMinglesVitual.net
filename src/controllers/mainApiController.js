const db = require('../db/models')

module.exports = {
    getAllContacts: (req,res) => { 
        
        db.contacts.findAll()
            .then(contacts => {
                res
                    .status(200)
                    .json ({
                        meta: {
                           count : contacts.length
                            
                        },
                        data: contacts
                        ,
                        status: 'success'
                })
            })
            .catch(error => {
                console.log(error)
                res
                    .status(500)
                    .json ({
                        status: 'error',
                        error: error
                })
            })
    },
}