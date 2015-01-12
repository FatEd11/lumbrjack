'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elr11789@gmail.com',
    pass: 'Bbbshyaw11!!'
  }
});

exports.send = function(req,res){

  console.log(req.headers);
  console.log(req.body);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ status: 'OK' }));
  res.end();
  // var emailData = req.body.emailData,
  // mailOptions = {
  //   to: 'edward.russell@evident-legal.com',
  //   subject: 'New request on lumbajack from ',
  //   from: emailData.from,
  //   html: emailData.body
  // };
  // transporter.sendMail(mailOptions, function(err, info){
  //   if (err) {
  //     console.log(err);
  //   }else{
  //     console.log('Message sent: ' + info.response);
  //   }
  // });
}