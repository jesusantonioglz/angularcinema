import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGraphsComponent } from './page-graphs.component';

describe('PageGraphsComponent', () => {
  let component: PageGraphsComponent;
  let fixture: ComponentFixture<PageGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
