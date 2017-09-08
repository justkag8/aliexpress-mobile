import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOpinionComponent } from './view-opinion.component';

describe('ViewOpinionComponent', () => {
  let component: ViewOpinionComponent;
  let fixture: ComponentFixture<ViewOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
