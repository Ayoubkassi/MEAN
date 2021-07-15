import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarItems : string[] = ["Accueil","Actualite", "Services", "Produits" , "Blog", "Contact" , "Recrutement", "Espace client"];

  constructor() { }

  ngOnInit(): void {
  }

}
