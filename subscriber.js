
var mqtt = require('mqtt');
const fs = require('fs');
var client = mqtt.connect('mqtt://localhost');
client.on('connect', function() {
    client.subscribe('num')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
    fs.appendFile('zadatak_12.txt', message, function (err) {
        if (err) throw err;
        console.log('Success!');
      });
});