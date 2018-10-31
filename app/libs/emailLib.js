const nodemailer = require('nodemailer')


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cocb9154@gmail.com',
            pass: 'vishal12345'
        }
    });

    let sendEmail = (data) => { 
        let mailOptions = {
            from: 'Admin', // sender address
            to: data.email, 
            subject: 'Account created succesfully', // Subject line
            text: 'Hello, welcome', // plain text body
        };

   
        

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });

}


        let emailVerification = (data) => {
            let mailOptions = {
                from: 'Admin', // sender address
                to: data.email, 
                subject: 'Password reset', // Subject line
                text: `http://localhost:4200/resetpassword/${data.token}`, // plain text body
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        }

    let meetingMail = (data,mail) => {
                let mailOptions = {
                    from: data.userName, // sender address
                    to: mail, 
                    subject: "New Meeting", // Subject line
                    text: `
                    Meeting Purpose: ${data.title}
                    Date: ${data.start}`, // plain text body
                };
    
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                });
            }
    let rescheduleMail = (data,mail) => {
        let mailOptions = {
            from: data.userName, // sender address
            to: mail, 
            subject: "Meeting Rescheduled", // Subject line
            text: `
            Meeting Purpose: ${data.title}
            New Date: ${data.start}`, // plain text body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
    }

module.exports = {
    mail: sendEmail,
    verifyMail : emailVerification,
    meetingMail:meetingMail,
    rescheduleMail:rescheduleMail
  }
  