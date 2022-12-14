import { SpotifyWebApi } from 'spotify-web-api-ts';
import * as spotifyCountries from "./spotifyCountries";
import * as loginUrl from "./spotify-token.service"
import { Artist } from 'spotify-api.js';


let findID : string;
let songCharts = new Array<string>();
let pleaseFindIt = new Array<string>();
export let songID = new Array<any>(); //Get's the ID of the song.
export let artistFind = new Array<any>() //This array will be responsible for finding groups of artist, music and date of release for the number one Song
export let getArtist = new Array<any>() //
export let getAlbum = new Array<any>() //
export let getReleaseData = new Array<any>() //
 

//This function will be used to get the song
async function getCountry(findCountry : string) : Promise<string[]> {
if(spotifyCountries.playlistsIds.has(findCountry)){
  let getID = spotifyCountries.playlistsIds.get(findCountry);
  findID = String(getID);
}
const getToken = loginUrl.getTokenFromUrl().replace(",", " ")
const spotifyCharts = new SpotifyWebApi({ accessToken: getToken});
const getplaylist = await spotifyCharts.playlists.getPlaylistItems(findID);
 for(let i = 0; i < 10; i++){
    songID[i] = (getplaylist.items[i].track.id)
    songCharts[i] = (getplaylist.items[i].track.name); 
  } 
   return songCharts;
}

//This function will be used to get the song
async function findCountry(findCountry : string) : Promise<string[]> {
  if(spotifyCountries.playlistsIds.has(findCountry)){
    let getID = spotifyCountries.playlistsIds.get(findCountry);
    findID = String(getID);
  }
  const getToken = loginUrl.getTokenFromUrl().replace(",", " ")
  const spotifyCharts = new SpotifyWebApi({ accessToken: getToken});
  const getplaylist = await spotifyCharts.playlists.getPlaylistItems(findID);
   for(let i = 0; i < 10; i++){
      songID[i] = (getplaylist.items[i].track.id)
      songCharts[i] = (getplaylist.items[i].track.name); 
     } 
     let artistGet = await spotifyCharts.tracks.getTrack(songID[0]);
     artistFind[0] = findCountry;
     artistFind[1] = songCharts[0];
     artistFind[2] = artistGet.artists[0].name;
     artistFind[3] = artistGet.album.name
     artistFind[4] = artistGet.album.release_date     
     /** 
     console.log(artistGet.album.name);
     console.log(artistGet.album.release_date);
     console.log(artistGet.artists[0]);
     **/
     return artistFind;
  }

  

export default{getCountry, songID, findCountry, getArtist}

