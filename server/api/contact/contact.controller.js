'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'zoho',
  auth: {
    user: process.env.EUSER,
    pass: process.env.EPASS
  }
});

exports.send = function(req,res){
  var mailOptions = {
    to: process.env.CONTACT,
    subject: 'New request on lumbajack from ' + req.body.name,
    replyTo: req.body.from,
    from: process.env.EUSER,
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