import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  portfolio = [
    {
      name: "Simple-CRM",
      picture: "CRM.png",
      description: "Smart and simple webbased CRM system",
      language: "angular",
      link: "https://simple-crm-1151a.web.app/"
    },

    {
      name: "Join - To-Do App",
      picture: "join.png",
      description: "Javascript based Kanban-Board",
      language: "javascript",
      link: "http://stahl-julian.de/Portfolio/join/index.html"
    },

    {
      name: "Ring-of-fire",
      picture: "ringoffire.jpg",
      description: "Drinking card game",
      language: "angular",
      link: "https://ring-of-fire-12a60.web.app/"
    },

    {
      name: "Pokedex",
      picture: "pokedex.jpg",
      description: "Javascript based Poke API",
      language: "javascript",
      link: "http://stahl-julian.de/Portfolio/Pokedex/index.html"
    },

    {
      name: "Haiger Weather-App",
      picture: "wetter.png",
      description: "Weather app from my living city",
      language: "javascript",
      link: "http://stahl-julian.de/Portfolio/wetter-app/index.html"
    },

    {
      name: "Lieferando",
      picture: "lieferando.png",
      description: "a copy of lieferando",
      language: "javascript",
      link: "http://stahl-julian.de/Portfolio/Lieferando/index.html"
    },

    {
      name: "My own page",
      picture: "homepageJS.jpg",
      description: "My own page",
      language: "angular",
      link: ""
    },
  ];


  languages!: any[];



  filter(language: string) {

    document.getElementById("javascript")?.classList.remove("actualFilter");
    document.getElementById("angular")?.classList.remove("actualFilter");


    if (language == 'all') {
      this.languages = this.portfolio;
    } else {
      this.languages = this.portfolio.filter(site => site.language == language);
    }

    document.getElementById(language)?.classList.add("actualFilter");

  }





  ngOnInit(): void {
    this.languages = this.portfolio;
  }

}
