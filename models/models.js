
// - HINT: a key part of this is removing a users mentees if their award count falls below 2.

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/juniorEnrichment');
// var Award = require('./award')


var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        validate : {
            notEmpty : true
        }
    },
})

var Award = db.define('award', {
    name: {
        type: Sequelize.STRING,
        allowNull : true
    }
})

//class methods from provided routes
User.findUsersViewModel = function(){
    return User.findAll()
}



User.updateUserFromRequestBody = function(id, body){
    User.findById(id)
    .then(user=>{
        user.update({
            name:body
        })
    })

}

//Instance Methods
User.prototype.generateAward = function(){
    Award.create({
        title:req.body.award
    })
    .then(newAward=>{
        return newAward.setUser(req.body.userId)
    })
    .then(res.send.bind(res))
    .catch(next)
}

User.prototype.removeReward = function(userId){
    User.findById(id)
    .then(user=>{
        return Award.destroy(user.Id)
    })
     Award.destroy
}


// //delete award
// router.delete('/:id/awards/:id', (req, res, next) =>{
//     User.removeReward(req.params.userId, req.params.id)
//     .then(redirect(res))
//     .catch(next)
// })


Award.belongsTo(User)
User.hasMany(Award);

User.belongsTo(User, {as : 'mentor'})
User.hasMany(User, {as : 'mentee', foreignKey : 'mentorId'})

module.exports = {
    User,
    Award,
    db
}