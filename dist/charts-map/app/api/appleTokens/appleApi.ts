import * as $ from "jquery";

//This is not an API but rather to get the country code of a specific place due Apple API's inability to get code
let chartsforApple = new Array<string>();

//Test JSON
 export async function fetchCharts(countryID : string) : Promise<string[]>{
  $.getJSON(`https://itunes.apple.com/${countryID}/rss/topsongs/limit=10/json`, function(data) 
  {
    for(var i = 0; i < 10; i++){
      chartsforApple[i]= (data.feed.entry[i].title.label + "\n")
    }
  });
  return chartsforApple;
}
















/*
  $.getJSON('https://itunes.apple.com/br/rss/topsongs/limit=10/json', function(data) 
      {
        for(var i = 0; i < 10; i++){
         iTunesCharts[i]= (data.feed.entry[i].title.label + "\n")
         iTunesURL[i] = (data.feed.entry[i].id.label);
        }
        console.log(iTunesURL);
        finaliTunesCharts = iTunesCharts.join("")
      
      });
*/