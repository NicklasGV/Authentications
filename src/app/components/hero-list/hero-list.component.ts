import { SuperHeroService } from 'src/app/services/super-hero.service';
import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  columnsToDisplay = ['name','firstName','lastName','place','button']

  constructor(private SuperHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.SuperHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
  }
  
  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }


  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

}
