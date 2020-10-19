const ChromecastAPI = require('chromecast-api');
const client = new ChromecastAPI();
client.on('device', function (device) {
    const ricknroll = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    console.log(`Access: ${device.friendlyName}`);

    device.on('status', (status) => {
        console.log(status);
    })

    device.play(ricknroll, (error) => {
        if (!error) {
            console.log("Playing..");
        }
    });
})
