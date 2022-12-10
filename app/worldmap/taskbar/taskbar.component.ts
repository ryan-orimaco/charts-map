import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { on } from 'process';
import * as appleApi from "src/app/api/appleTokens/appleApi"
import spotifyApi from 'src/app/api/spotifyTokens/spotifyApi';
import * as loginUrl from "src/app/api/spotifyTokens/spotify-token.service"
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const hello  = $(location).attr("href")

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  { 
  }
  
  static hideCountry() {
    $("#getCountry").hide();
  }
  static showCountry() {
    $("#getCountry").show();
  }
  
  //This creates the login page
  static authorize(){
    $("#signInButton").on("click",function(){
        const getLogin = loginUrl.loginUrl
        window.open(loginUrl.loginUrl);
    });
  }

  static clickImage(){
    $("#clickImage").on("click",function()
    {
    });
  }

  //This is responsible for us to click on Spotify charts
  static spotifyCharts(){
    $("#spotifyCharts").on("click",function(){   
      //What will happen is that if the user clicks on Spotify Apple Music will disappear
      $("#appleCharts").hide();

      //At the same time the Compare Button Will appear
      $("#compareSongs").show();
      $("#signInButton").show();

      //Gets the country names
     $.get('dist/charts-map/src/assets/countryNames.txt', function(data) {
        var myvar = data;
        $(myvar).css("fill", "white");
        $(myvar).css("cursor", "pointer");
        $(myvar).on("click", async function(){
          var countryName = $(this).attr("title");
          var country = String(countryName);
          $( "#charts" ).text("Top 10 Charts in: " + country).css("fontSize", "30px");
          var findString : string[];
          findString = await spotifyApi.getCountry(country);
          $( "#songNames1 p" ).text("1. " + findString[0]).css("fontSize", "15px");
          $( "#songNames2 p" ).text("2. " + findString[1]).css("fontSize", "15px");
          $( "#songNames3 p" ).text("3. " + findString[2]).css("fontSize", "15px");
          $( "#songNames4 p" ).text("4. " + findString[3]).css("fontSize", "15px");
          $( "#songNames5 p" ).text("5. " + findString[4]).css("fontSize", "15px");
          $( "#songNames6 p" ).text("6. " + findString[5]).css("fontSize", "15px");
          $( "#songNames7 p" ).text("7. " + findString[6]).css("fontSize", "15px");
          $( "#songNames8 p" ).text("8. " + findString[7]).css("fontSize", "15px");
          $( "#songNames9 p" ).text("9. " + findString[8]).css("fontSize", "15px");
          $( "#songNames10 p" ).text("10. " + findString[9]).css("fontSize", "15px");
    
          TaskbarComponent.showCountry();

          //Now using the names we can make it clickable, for the sake of this one this will be hardcoded

          //This is for the number 1 song
          $("#songNames1").on("click", function(){
            var findSong = $("#songNames1").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[0]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[0]).css("fontSize", "20px");
          })

          //This is for the number 2 song
          $("#songNames2").on("click", function(){
            var findSong = $("#songNames2").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[1]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[1]).css("fontSize", "20px");
          })

          //This is for the number 3 song
          $("#songNames3").on("click", function(){
            var findSong = $("#songNames3").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[2]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[2]).css("fontSize", "20px");
          })

          //This is for the number 4 song
          $("#songNames4").on("click", function(){
            var findSong = $("#songNames4").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[3]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[3]).css("fontSize", "20px");
          })

          //This is for the number 5 song
          $("#songNames5").on("click", function(){
            var findSong = $("#songNames5").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[4]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[4]).css("fontSize", "20px");
          })

          //This is for the number 6 song
          $("#songNames6").on("click", function(){
            var findSong = $("#songNames6").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[5]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[5]).css("fontSize", "20px");
          })

           //This is for the number 3 song
           $("#songNames7").on("click", function(){
            var findSong = $("#songNames7").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[6]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[6]).css("fontSize", "20px");
          })

          //This is for the number 3 song
          $("#songNames8").on("click", function(){
            var findSong = $("#songNames8").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[7]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[7]).css("fontSize", "20px");
          })

          //This is for the number 3 song
          $("#songNames9").on("click", function(){
            var findSong = $("#songNames9").html();
            $("#playSong").show();
            var idOfSong = spotifyApi.songID[8]
            var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
            $("#embedSong").attr("src", embedtheSong)
            $( "#particularSong" ).text(findString[8]).css("fontSize", "20px");
          })

            //This is for the number 3 song
            $("#songNames10").on("click", function(){
              var findSong = $("#songNames10").html();
              $("#playSong").show();
              var idOfSong = spotifyApi.songID[9]
              var embedtheSong = `https://open.spotify.com/embed/track/${idOfSong}?utm_source=generator`
              $("#embedSong").attr("src", embedtheSong)
              $( "#particularSong" ).text(findString[9]).css("fontSize", "20px");
            })
          
      });

      
        $("#closeButton").on("click", function(){
          $( "#songNames" ).replaceWith("");
         TaskbarComponent.hideCountry();
         $("#playSong").hide()
        });
        });  
    });

    //Okay so let's test out the comparing Genre's section for Spotify
    //Weird thing the process will repeat again as above
    $("#compareSongs").on("click", function(){
        var country1 : string;
        var saveCountry = new Array<string>();
        var findString = new Array<string>();
        var firstCountry : any;
        var secondCountry : any;

          /*Create some precomposites when showing songs */
          $("#comparisonOfSong").show(); 
          $("#album").show();
          $("#CurrentSong").show();
          $("#PreviousSong").show();
          $("#genre").hide(); //Because the get genre feature in spotify cannot be access we decided to get the Album and song
          $("#getCountry").hide(); //Ensures getting country hides
          $("#playSong").hide();
          
                    
          //If the user clicks on the first country map it will go to a particular country.
          $("#firstSong").on("click", function(event){
            $.get('../assets/countryNames.txt',  function(data) {
              $("#getCountry").hide();
              $("#playSong").hide();
               var myvar = data;
              $(myvar).css("fill", "yellow");
              $(myvar).on("click", async function(){
                firstCountry = $(this).attr("title");
                country1 = String(firstCountry);
                 findString = await spotifyApi.findCountry(country1);
                $( "#firstSongCountry" ).text("Number One Song in: " + findString[0]).css("fontSize", "15px");
                $("#getCountry").hide();
                $( "#song" ).text(findString[1]);
                $( "#artist" ).text(findString[2]);
                $( "#album" ).text(findString[3]);
                $( "#yearrelease" ).text(findString[4]);
                findString[5] = `https://open.spotify.com/embed/track/${spotifyApi.songID[0]}?utm_source=generator`
                $("#CurrentSong").attr("src", findString[5])
                saveCountry.push(...findString);
                console.log(saveCountry)

                //Now using an if statement to ensure that the lenght is not less than 1
                if(saveCountry.length > 6){
                  $("#secondSong").show();
                  $("#lastAlbum").show();
                  $("#lastGenre").hide();
                  var fakeCountry = country1;
                  $("#secondSongCountry").text("This is the last song from:  " + saveCountry[saveCountry.length-12]);
                  $( "#lastSong" ).text(saveCountry[saveCountry.length-11]);
                  $( "#lastArtist" ).text(saveCountry[saveCountry.length-10]);
                  $( "#lastAlbum" ).text(saveCountry[saveCountry.length-9]);
                  $( "#lastRelease" ).text(saveCountry[saveCountry.length-8]);
                  $("#PreviousSong").attr("src", saveCountry[saveCountry.length-7])
                }
                
              
              });   
            });
          })

          $("#closeButton2").on("click", function(){
            $("#comparisonOfSong").hide()
            $("#getCountry").hide();
           });

      });
   
  }

  //This will be used to find the country with Apple Charts
  static appleCharts(){
    let iTunesCharts = new Array<string>();
    let iTunesURL = new Array<string>();
    var finaliTunesCharts : string = ""
    $("#appleCharts").on("click", function(){
      //Now this will hide the spotify charts
      $("#spotifyCharts").hide();
      $("#signInButton").hide();

      //This will bring the Apple Button Charts
      $("#compareSongsApple").show();

      //Get the query
      $.get('dist/charts-map/src/assets/itunes.txt', function(data){
        //Now get the data
        var getData = data;
        $(getData).css("fill", "red");
        $(getData).css("cursor", "pointer");

         //Now we can use this to have an ability to hover over countries
        $(getData).on("click", async function(event){
          var countryName = $(this).attr("title");
          const country = String(countryName)
          var name = $("#charts").text(country)
          var countryId = $(this).attr("id");
          $(name).css("fontSize", "12px !important;")
          TaskbarComponent.showCountry();
            
          
          $.getJSON(`https://itunes.apple.com/${countryId}/rss/topsongs/limit=10/json`, function(data) 
          {
            for(var i = 0; i < 10; i++){
             iTunesURL[i] = (data.feed.entry[i].id.label);
             iTunesCharts[i]= (data.feed.entry[i]["im:name"].label + "\n");
              
             $( "#songNames1" ).text("1. " + iTunesCharts[0]).css("fontSize", "15px");
             $( "#songNames2" ).text("2. " + iTunesCharts[1]).css("fontSize", "15px");
             $( "#songNames3" ).text("3. " + iTunesCharts[2]).css("fontSize", "15px");
             $( "#songNames4" ).text("4. " + iTunesCharts[3]).css("fontSize", "15px");
             $( "#songNames5" ).text("5. " + iTunesCharts[4]).css("fontSize", "15px");
             $( "#songNames6" ).text("6. " + iTunesCharts[5]).css("fontSize", "15px");
             $( "#songNames7" ).text("7. " + iTunesCharts[6]).css("fontSize", "15px");
             $( "#songNames8" ).text("8. " + iTunesCharts[7]).css("fontSize", "15px");
             $( "#songNames9" ).text("9. " + iTunesCharts[8]).css("fontSize", "15px");
             $( "#songNames10" ).text("10. " + iTunesCharts[9]).css("fontSize", "15px");
            }
            finaliTunesCharts = iTunesCharts.join("")
          });
      })

      $("#songNames1").on("click", function(){
        var findSong = $("#songNames1").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[0].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[0]).css("fontSize", "20px");
      })

      $("#songNames2").on("click", function(){
        var findSong = $("#songNames2").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[1].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[1]).css("fontSize", "20px");
      })

      $("#songNames3").on("click", function(){
        var findSong = $("#songNames2").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[2].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[2]).css("fontSize", "20px");
      })

      $("#songNames4").on("click", function(){
        var findSong = $("#songNames4").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[3].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[3]).css("fontSize", "20px");
      })

      $("#songNames5").on("click", function(){
        var findSong = $("#songNames5").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[4].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[4]).css("fontSize", "20px");
      })

      $("#songNames6").on("click", function(){
        var findSong = $("#songNames6").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[5].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[5]).css("fontSize", "20px");
      })

      $("#songNames7").on("click", function(){
        var findSong = $("#songNames7").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[6].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[6]).css("fontSize", "20px");
      })

      $("#songNames8").on("click", function(){
        var findSong = $("#songNames4").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[7].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[7]).css("fontSize", "20px");
      })

      $("#songNames9").on("click", function(){
        var findSong = $("#songNames9").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[8].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[8]).css("fontSize", "20px");
      })

      $("#songNames10").on("click", function(){
        var findSong = $("#songNames10").html();
        $("#playSong").show();
        var idOfSong = iTunesURL[9].replace("https://", "https://embed.")
        var embedtheSong = idOfSong
        $("#embedSong").attr("src", embedtheSong)
        $( "#particularSong" ).text(iTunesCharts[9]).css("fontSize", "20px");
      })

      $("#closeButton").on("click", function(){
        $( "#songNames" ).replaceWith("");
       TaskbarComponent.hideCountry();
       $("#playSong").hide()
      });
      
      //We will use the same steps as mentioned when the Compare Button is clicked to get the Apple Data
      $("#compareSongsApple").on("click", function()
      {
        //Initialize a few array variables that are necessary.
        let clickediTunes = new Array<string>(); 
        let tempiTunesArray = new Array<string>();

        $("#genre").show();
        $("#lastGenre").show();

        $("#album").hide();

        //This ensures getCharts disappears
        $("#getCountry").hide();

        //Ensures playSong disappears

        $("#comparisonOfSong").show(); //This will show the charts list
        $("#firstSong").on("click", function(){
          $.get('../assets/itunes.txt', function(data){
            //Now get the data
            var getData = data;
            $(getData).css("fill", "orange");
            $("#getCountry").hide();

            //Now clicking on a country is the next option
            $(getData).on("click",function(){
              $("#playSong").hide();
              var countryName = $(this).attr("title");
              const country = String(countryName)
              var countryId = $(this).attr("id");
              $("#getCountry").hide();
            $.getJSON(`https://itunes.apple.com/${countryId}/rss/topsongs/limit=10/json`, (data) => 
            {  
              //Let's get put the data into an array
              clickediTunes[0] = country;
              clickediTunes[1] = data.feed.entry[0]["im:name"].label;
              clickediTunes[2] = data.feed.entry[0]["im:artist"].label;
              clickediTunes[3] = data.feed.entry[0].category.attributes.term;
              clickediTunes[4] = data.feed.entry[0]["im:releaseDate"].attributes.label;
              const embedLink = data.feed.entry[0].id.label;
              const replaceembedLink = embedLink.replace("https://", "https://embed.");
              clickediTunes[5] = replaceembedLink;
              
              //Now implement the data
              $( "#firstSongCountry" ).text("Number One Song in: " + clickediTunes[0]).css("fontSize", "15px");
                $( "#song" ).text(clickediTunes[1]);
                $( "#artist" ).text(clickediTunes[2]);
                $( "#genre" ).text(clickediTunes[3]);
                $( "#yearrelease" ).text(clickediTunes[4]);
                $("#CurrentSong").show();
                $("#CurrentSong").attr("src", clickediTunes[5])

                //Now we can push the data to a temporary variable
                tempiTunesArray.push(...clickediTunes);
                
                //Now get the length data
                if(tempiTunesArray.length > 6){
                  $("#secondSong").show();
                  $("#secondSongCountry").text("This is the last song from:  " + tempiTunesArray[tempiTunesArray.length-12]);
                  $( "#lastSong" ).text(tempiTunesArray[tempiTunesArray.length-11]);
                  $( "#lastArtist" ).text(tempiTunesArray[tempiTunesArray.length-10]);
                  $("#lastGenre").text(tempiTunesArray[tempiTunesArray.length-9]);
                  $( "#lastRelease" ).text(tempiTunesArray[tempiTunesArray.length-8]);
                  $("#PreviousSong").show();
                  $("#PreviousSong").attr("src", tempiTunesArray[tempiTunesArray.length-7])
                }
            });


            })
          });
        })
      })

      $("#closeButton2").on("click", function(){
        $("#comparisonOfSong").hide()
        $("#getCountry").hide();
       });
      });
    });
  }
}


