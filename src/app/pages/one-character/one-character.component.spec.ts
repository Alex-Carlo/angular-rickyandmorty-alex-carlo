import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCharacterComponent } from './one-character.component';

describe('OneCharacterComponent', () => {
  let component: OneCharacterComponent;
  let fixture: ComponentFixture<OneCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
