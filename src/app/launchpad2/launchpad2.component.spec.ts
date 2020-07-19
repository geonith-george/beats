import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Launchpad2Component } from './launchpad2.component';

describe('Launchpad2Component', () => {
  let component: Launchpad2Component;
  let fixture: ComponentFixture<Launchpad2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Launchpad2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Launchpad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
