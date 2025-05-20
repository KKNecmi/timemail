const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('dotenv').config();

const filePath = path.join(__dirname, 'messages.json');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

cron.schedule('* * * * *', () => {
  console.log('[CRON] Checking...');
  if (!fs.existsSync(filePath)) return;

  const messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const now = new Date();

  messages.forEach((msg) => {
    if (!msg.sent && new Date(msg.sendDate) <= now) {
      transporter.sendMail({
        from: process.env.SMTP_USER,
        to: msg.email,
        subject: 'TimeMail - Message from the past 🕰️',
        text: msg.message,
      }, (err, info) => {
        if (err) return console.error('Mail gönderilemedi:', err);
        console.log(`✔️ Mail Sended: ${msg.email}`);

        msg.sent = true;
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
      });
    }
  });
});
