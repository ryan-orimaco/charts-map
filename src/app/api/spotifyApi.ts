import { SpotifyWebApi } from 'spotify-web-api-ts';
import * as spotifyCountries from "./spotifyCountries";
//import {accessTokenGet} from "./getCharts"

 let findID : string;
 let songCharts = new Array<string>();
 
async function getCountry(findCountry : string) {
if(spotifyCountries.playlistsIds.has(findCountry)){
  let getID = spotifyCountries.playlistsIds.get(findCountry);
  findID = String(getID);
}
//console.log(accessTokenGet)
const spotifyCharts = new SpotifyWebApi({ accessToken: "BQDxEh-OGHTLDVy8Ty9he61RN8nMLaF4q0sjbwhrFD5mSnPV5WkIdydWAVR_yCpT0Fn34zKfnyHhedeBUG91h_jbVkLPM8e-jNN9AJhyp5J2qUgAKB29a6NXCWsSgaYzkVrvoNsKLgfHYdQs2LhJA1gKxbOEV0p2dH50Wc0khfrn6RxgiknKJn3sS9OnHeHliGxBy1VEClssUVvqdMOvZyuABVq-oMu_bDprgXBbI_0KtouKy874QuWAvk2FyAurwpvNB5UBoQNRrJSUvfcWyD0XS5SfX4dj7eBnLu5MsY43rmSVcR9pP1QgHXUgphkNr4V_ruHTV2py2GhSTjvV"});
const getplaylist = await spotifyCharts.playlists.getPlaylistItems(findID);
 for(let i = 0; i < 10; i++){
    songCharts[i] = getplaylist.items[i].track.name
   }
   let getCharts : string = String(songCharts);
   console.log(getCharts);
   return getCharts;
}

export default{getCountry}

