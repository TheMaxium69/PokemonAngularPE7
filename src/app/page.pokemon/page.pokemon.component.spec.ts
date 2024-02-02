import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePokemonComponent } from './page.pokemon.component';

describe('PagePokemonComponent', () => {
  let component: PagePokemonComponent;
  let fixture: ComponentFixture<PagePokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagePokemonComponent]
    });
    fixture = TestBed.createComponent(PagePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
