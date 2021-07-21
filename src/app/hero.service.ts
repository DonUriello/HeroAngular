import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({               /** @Injectable() Indica che questo servizio farà parte */
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  /**
    getHeroes(): Hero[] {      Ritorna l'array di HEROES 
      return HEROES;
    }
    */
  
    getHeroes(): Observable<Hero[]> {
      const heroes = of(HEROES);
      this.messageService.add('HeroService: Fetched heroes');
      return heroes;
    }

}
