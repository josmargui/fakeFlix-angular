import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-netflix';
  
  top5Films: any = {
    section: "TOP 3",
    
    films: [{
    
    title: "La Casa de Papel",
    
    imagen:"./assets/images/Top10/1-papel.webp",
    
    },{
  
      title: "La Reina del Flow",
      
      imagen:"./assets/images/Top10/2-reina.webp",
      
      },{
  
        title: "Titanes",
        
        imagen:"./assets/images/Top10/3-titanes.webp",
        
        }]

  }
  comedyFilms: any = {

    section: "Comedia",
    
    films: [{
    
    title: "Cazafantasmas",
    
    imagen:"./assets/images/Comedia/cazafantasmas.webp",
    
    }, {
    
      title: "Dictador",
      
      imagen:"./assets/images/Comedia/dictador.webp",
      
      },
      {
        title:"Érase una vez... Hollywood",

        imagen:"./assets/images/Comedia/erasehollywood.webp",
      },
      {
        title:'Family Guy',

        imagen:'./assets/images/Comedia/family guy.webp'
      },{
        title:'Juerga',

        imagen:'./assets/images/Comedia/juerga.webp'
      }]
}

dramaFilms: any = {

  section: "Drama",
  
  films: [{
  
  title: "1917",
  
  imagen:"./assets/images/Drama/1917.webp",
  
  },{
  
    title: "Milla Verde",
    
    imagen:"./assets/images/Drama/millaverde.webp",
    
    }
    ,{
  
      title: "Arrival",
      
      imagen:"./assets/images/Drama/arrival.webp",
      
      },{
  
        title: "Scarface",
        
        imagen:"./assets/images/Drama/scarface.webp",
        
        },{
  
          title: "Corazones",
          
          imagen:"./assets/images/Drama/corazones.webp",
          
          }]
}

actionFilms: any = {

  section: "Acción",
  
  films: [{
  
  title: "El protector",
  
  imagen:"./assets/images/Accion/elprotector.webp"
  
  },{
  
    title: "Equalizer 2",
    
    imagen:"./assets/images/Accion/equalizer2.webp",
    
    },
    {
  
      title: "Heat",
      
      imagen:"./assets/images/Accion/heat.webp",
      
      },
      {
  
        title: "Kill Bill 2",
        
        imagen:"./assets/images/Accion/killbill2.webp",
        
        },
        {
  
          title: "Terminator 2",
          
          imagen:"./assets/images/Accion/terminator2.webp",
          
          }]
}

horrorFilms: any = {
  section: 'Terror',
  films: [
    {
      title: 'El Apostol',
      image: '../assets/images/Terror/apostol.jpg'
    },
    {
      title: 'La Calle del Terror Parte II',
      image: '../assets/images/Terror/calleterror.jpg'
    },
    {
      title: 'Infierno Bajo el Agua',
      image: '../assets/images/Terror/infiernoagua.webp'
    },
    {
      title: 'Insidious II',
      image: '../assets/images/Terror/insidious2.webp'
    },
    {
      title: 'Life',
      image: '../assets/images/Terror/life.webp'
    }
  ]
  }

animeFilms: any = {

  section: "Anime",
  
  films: [{
  
  title: "Titulo",
  
  imagen:"url",
  
  }]
}
}