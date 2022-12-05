const { Client } = require("spotify-api.js");
const client = new Client({ 
    token: { clientID: 'id', clientSecret: 'secret' },
    // Ready event is required if you are providing clientID and clientSecret fields.
    // As the client has to create the token first with it and then emits the ready event.
    onReady() {
        console.log(await client.tracks.get('id'));
    }
})

// More simpler code with asynchronous operations:
const client = await Client.create({ token: { clientID: 'id', clientSecret: 'secret' } });
console.log(await client.tracks.get('id'));
