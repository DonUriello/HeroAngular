import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', /** CSS element selector */
  templateUrl: './heroes.component.html', /** Location of the component's template */
  styleUrls: ['./heroes.component.css'] /** Location of the componente private CSS Style */
})
export class HeroesComponent implements OnInit {
  
  /**
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  */
  heroes: Hero[] = [];
  selectedHero?: Hero;

  /** constructor() { } */
  constructor(private heroService: HeroService,
              private messageService: MessageService) { } /** In questo modo instanzio la classe 
                                                           *  dei servizi da richiamare in giro  */
                                                          /** The constructor shouldn't do anything
                                                           *  It certainly shouldn't call a function that 
                                                           *  makes HTTP requests to a remote server as a real data service would
                                                           */

  ngOnInit(): void {
    this.getHeroes();
   }

  /**Ritorna Array di HEROES */
  getHeroes(): void {
    /**this.heroes = this.heroService.getHeroes();*/
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
