import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiePage } from './envoie.page';

describe('EnvoiePage', () => {
  let component: EnvoiePage;
  let fixture: ComponentFixture<EnvoiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
