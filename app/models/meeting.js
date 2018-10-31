const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let meetingSchema = new Schema({
      meetingId: {
          type:String
      },
      userName: {
          type: String
      },
      title: {
          type: String
      },
      venue: {
        type:String
      },
      start:{
         type:Date 
      },
      end:{
         type:Date 
      },
      color:{
    type:Object
      }
  })

mongoose.model('MeetingSchema', meetingSchema);
