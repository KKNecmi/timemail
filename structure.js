const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const filePath = path.join(__dirname, 'messages.json');

app.post('/messagesent', (req, res) => {
  const { name, email, message, sendDate } = req.body;
  const newMessage = { name, email, message, sendDate, sent: false };

  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }

  messages.push(newMessage);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  res.redirect('/messagesent.html');
});

app.post('/main', (req, res) => {
    res.redirect('/main.html');
});

app.listen(PORT, () => console.log(`Server http://localhost:${PORT} üzerinde çalışıyor`));