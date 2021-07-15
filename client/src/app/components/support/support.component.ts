import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  imgSupport2 : string = "../../assets/suppor1.jpg";
  imgSupport1 : string = "../../assets/suppor2.jpg";

  supports : any[] = [
    {
      title : 'Pourquoi SMARDEN',
      description : 'Nous plaçons la satisfaction client au centre de notre métier.',
      features : [
        'Professionnalisme','Flexibilité', 'Sens de l’écoute' , 'Réactivité'
      ]
    },

    {
      title : 'Support & Conseil',
      description : 'Notre équipe vous assiste au quotidien en mettant à votre disposition une offre globale de services et d’accompagnement dans vos projets CAO et BIM.',
      features : [
        'Formateurs logiciels BIM & CAO', 'Consultants opérationnels' , 'Techniciens support'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
