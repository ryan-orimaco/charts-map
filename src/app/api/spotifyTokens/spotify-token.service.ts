import * as taskbarGet from "src/app/worldmap/taskbar/taskbar.component"

export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:4200/worldmap"
const clientId = "f1ed8afa158d4c53a228bc20b80cb33e"
const scope = [
  "user-read-currently-playing",
  "user-top-read",
  "user-modify-playback-state"
]
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`

export function getTokenFromUrl(){
  //Now using this function we can split the data
  const convertUrl = String(taskbarGet.hello); //Converst the URL to a String
  const firstConversion = String(convertUrl.split("http://localhost:4200/worldmap#access_token="))
  const finalConversion = String(firstConversion.split("&token_type=Bearer&expires_in=3600"))
  return finalConversion
    
}