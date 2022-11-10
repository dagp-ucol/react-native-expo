const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=e5b9774619d578ca9f7bb63fdfca8888&format=json'

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then (artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            listeners: artist.listeners,
            image: artist.image[3]['#text'],
        }
    }))
    .catch(error => console.log(error));
}

export { getMusicData };
