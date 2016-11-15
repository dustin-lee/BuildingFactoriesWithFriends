console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend');
function FriendsController(){
  this.index = function(req,res){
    //your code here
    Friend.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Friend.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        res.json(result)
      }
    })
  };
  this.update = function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      }else{
        friend.firstname = req.body.firstname;
        friend.lastname = req.body.lastname;
        friend.birthday = req.body.birthday;
        friend.save(function(err, updatedFriend){
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    //your code here
    Friend.remove({_id: req.params.id}, function(err){
      console.log('deleting it man in server chill')
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    console.log('reached show method in server')
    Friend.findOne({_id: req.params.id}, function(err, result){
      console.log('we made it, got:', result)
      res.json(result);
    })
  };
  this.show_update = function(req,res){
    //your code here
    console.log('reached show method in server')
    Friend.findOne({_id: req.params.id}, function(err, result){
      console.log('we made it, got:', result)
      res.json(result);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
