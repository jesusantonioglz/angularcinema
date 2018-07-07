import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVotesComponent } from './page-votes.component';

describe('PageVotesComponent', () => {
  let component: PageVotesComponent;
  let fixture: ComponentFixture<PageVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
