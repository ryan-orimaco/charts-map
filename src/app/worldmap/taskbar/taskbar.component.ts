import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import spotifyApi from 'src/app/api/spotifyApi';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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

  //This is responsible for us to click on Spotify charts
  static spotifyCharts(){
    $("#spotifyCharts").on("click",function(){
     $.get('../assets/countryNames.txt', function(data) {
        var myvar = data;
        $(myvar).css("fill", "white");
        $(myvar).on("click", async function(){
          var countryName = $(this).attr("title");
          var country = String(countryName);
          console.log(spotifyApi.getCountry(country));
          $( "p" ).replaceWith(await spotifyApi.getCountry(country) + "\n");
          TaskbarComponent.showCountry();
      
      });

      
        $(myvar).on("mouseenter", function(){
          $( "songNames" ).replaceWith("");
        TaskbarComponent.hideCountry();
    });
        });  
    });
   
  }


  //This will be used to find the country with Apple Charts
  static appleCharts(){
    $("#appleCharts").on("click", function(){

      //Get the query
      $.get('../assets/countryNames.txt', function(data){
        //Now get the data
        var getData = data;
        $(getData).css("fill", "red");

         //Now we can use this to have an ability to hover over countries
      $(getData).on("mouseenter", function(){
          var countryName = $(this).attr("title");
          //const country = String(countryName)
          //$("p").text(spotifyApi.getPlaylist(String(countryName)));
          TaskbarComponent.showCountry();
      })

      /*
       //Now we can use this to have an ability to hover over countries
       $(getData).on("mouseleave", function(){
        TaskbarComponent.hideCountry();
      });*/
      });

     
    });
  }
}


