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
  var mailOptions = {
    to: 'edward.russell@evident-legal.com',
    subject: 'New request on lumbajack from ' + req.body.name,
    sender: req.body.from,
    html: req.body.body
  };
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
      res.json(500, err);
    }else{
      console.log('Message sent: ' + info.response);
      res.json(201, info.response);
    }
  });
}