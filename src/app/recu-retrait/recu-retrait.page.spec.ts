import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuRetraitPage } from './recu-retrait.page';

describe('RecuRetraitPage', () => {
  let component: RecuRetraitPage;
  let fixture: ComponentFixture<RecuRetraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuRetraitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuRetraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
