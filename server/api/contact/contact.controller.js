'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GUSER,
    pass: process.env.GPASS
  }
});

exports.send = function(req,res){
  var mailOptions = {
    to: process.env.CONTACT,
    subject: 'New request on lumbajack from ' + req.body.name,
    replyTo: req.body.from,
    from: req.body.from,
    sender: req.body.from,
    html: req.body.body + '<br/>Email:' + req.body.from
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