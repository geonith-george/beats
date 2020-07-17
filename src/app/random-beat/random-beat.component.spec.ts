import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBeatComponent } from './random-beat.component';

describe('RandomBeatComponent', () => {
  let component: RandomBeatComponent;
  let fixture: ComponentFixture<RandomBeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
