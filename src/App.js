// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Hexagon from './Hexagon';
import Niche from './Niche';
// import Bird from './Bird';
// import golden from './golden.jpg';
import city_lights from './city_lights.jpg';
// import BlueHex from './BlueHex';
import Me from './Me.jpg';
import TitleforMe from './TitleforMe';
import AnimatedTitle from './AnimatedTitle';
import AboutMeBox from './AboutMeBox';
import Qualifications from './Qualifications';
import ProgrammingLogos from './ProgrammingLogos';
import TerminalUbuntu from './TerminalUbuntu';

function App(Topic, link) {
  return (
    <div className="App_body">

      <div className='Container_city-lights'>
      <img src={city_lights} className="App-city_lights" alt="city_lights" />

      </div>

     
    <div className="Parent_container">
    
      <Niche Topic = "Home" link=".About_parent" />
      <Niche Topic = "About"/>
      <Niche Topic = "Qualifications"/>
      <Niche Topic = "Projects"/>
      <Niche Topic = "Connect"/>
      
     
      </div>
      <div className="TitleforMe_container">
      <TitleforMe/>
      </div>
      
     
      <div class="photo_container">
     
      <img src={Me} className="App-Me" alt="Me" />
    
      

      <div class="About_parent">

      <AnimatedTitle/>
      </div>
      <div class="About_me">
      <AboutMeBox/>
      
      



      </div>
      
      <div class="QualificationsTitle_container">
      <Qualifications/>
      </div>

      <div class="ProgrammingLogos_container">
      <ProgrammingLogos/>
      </div>
      
      <div class="TerminalUbuntu_container">
      <TerminalUbuntu/>
     
      </div>

      <div class="Projects_container">
      asdasdasdads
      </div>


     


    



      </div>
      </div> 
 



  );
}

export default App;
