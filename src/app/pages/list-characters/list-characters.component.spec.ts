import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharactersComponent } from './list-characters.component';

describe('ListCharactersComponent', () => {
  let component: ListCharactersComponent;
  let fixture: ComponentFixture<ListCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
