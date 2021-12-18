import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  skills = [
    {
      name: "HTML & SCSS",
      picture: "html.png",
      level: 80,
    },

    {
      name: "Javascript",
      picture: "javascript.png",
      level: 70,
    },

    {
      name: "Bootstrap",
      picture: "bootstrap.jpg",
      level: 70,
    },

    {
      name: "Git",
      picture: "git.png",
      level: 70,
    },

    {
      name: "SCRUM",
      picture: "scrum.png",
      level: 65,
    },

    {
      name: "REST API",
      picture: "restAPI.png",
      level: 65,
    },

    {
      name: "Angular",
      picture: "angular.png",
      level: 50,
    },

    {
      name: "Databases",
      picture: "databases.png",
      level: 40,
    },


  ]

  ngOnInit(): void {
  }

}
