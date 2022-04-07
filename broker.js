var mosca = require('mosca');
console.log("MQTT broker is ready to go online...");
var settings = {
    port:1883
}
console.log("Setting port: "+settings.port+"...");
var server = new mosca.Server(settings);
    server.on('ready', function() {
    console.log("MQTT broker is online!");
});