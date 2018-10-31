 const check = require("./checkLib.js")
 const redis  = require('redis');
 const client = redis.createClient({
   url  : 'redis://redis-13064.c100.us-east-1-4.ec2.cloud.redislabs.com:13064',
   password  : 'vishal12345'
  
  });

   client.get('welcome',function(err,welcomeMessage) {
     if (err) throw err;
     else {
        console.log("welcomeMessage");
     }
   })

   let getOnlineUsers = (hash,cb) => {
        client.HGETALL(hash,(err,result)=> {
            console.log("users from "+ hash);
            if (err) {
                console.log(err);
                cb(err,null)
            }
            else if(check.isEmpty(result)) {
                console.log("No online users");
                cb(null,result)
            }
            else {
                console.log(result);
                cb(null,result)                
            }
        })
   }

   let appendOnlineUser = (hash,key,value,cb) => {
       client.HMSET(hash,key,value,(err,result)=>{
            if (err) {
                console.log(err);
                cb(err,null)
            } else {
                console.log(result);
                cb(null,result)                
            }
       })
   }

   let removeOnlineUser = (hash,key) => {
       client.HDEL(hash,key)
       return true;
   }






module.exports = {
    getOnlineUsers:getOnlineUsers,
    appendOnlineUser:appendOnlineUser,
    removeOnlineUser:removeOnlineUser,
}
