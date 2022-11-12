import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { TaskbarComponent } from './taskbar/taskbar.component';


@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  { 
    /*
    $("path").on("mouseenter", function(){
        TaskbarComponent.showCountry();
    });

    $("path").on("mouseleave", function(){
      TaskbarComponent.hideCountry();
  });
  */

    /*
    $(TaskbarComponent.spotifyCharts).on("click", function(){
      jQuery.get('../assets/countryNames.txt', function(data) {
        var myvar = data;
        console.log(myvar);
        $(myvar).css("fill", "yellow");
        
        });  
        });
        */
        TaskbarComponent.spotifyCharts();
        TaskbarComponent.appleCharts();
  }


  

}

  

