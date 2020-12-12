
const express = require('express');
const app = express()
const Subscriber = require('./models/subscribers');

app.get('/subscribers', (req, res) => {
  Subscriber.find().then(subscribers => res.send(subscribers));
  return;
});
app.get('/subscribers/names', (req, res) => {
  Subscriber.find().select({name: 1, subscribedChannel: 1}).then(subscribers => res.send(subscribers));
  return;
});














module.exports = app;
