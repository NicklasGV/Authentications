import { SuperHeroService } from './../../services/super-hero.service';
import { SuperHero } from './../../models/super-hero';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() herosUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero:SuperHero) {
    this.superHeroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit((heroes)))
  }

  deleteHero(hero:SuperHero) {
    this.superHeroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit((heroes)))
  }

  createHero(hero:SuperHero) {
    this.superHeroService
    .createHero(hero)
    .subscribe((heroes: SuperHero[]) => this.herosUpdated.emit((heroes)))
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
