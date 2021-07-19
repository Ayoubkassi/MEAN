import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems : string[] = ["Accueil","Actualite", "Ingénierie", "Solutions" , "SDE BIM", "Contact" , "Recrutement", "Académie","Quiz"];

  /*[{name : "Accueil",subs : []},
                        {name :"Actualite",subs : []}, 
                        {name : "Ingénierie", subs : []},
                        {name : "Solutions", subs : []} , 
                        {name : "SDE BIM", subs : []}, 
                        {name : "Contact" , subs : []}, 
                        {name :"Recrutement" , subs : []},
                        { name :"Académie", subs: []},
                        {name :"Quiz", subs: []}];*/

  constructor() { }

  ngOnInit(): void {
  }

}
