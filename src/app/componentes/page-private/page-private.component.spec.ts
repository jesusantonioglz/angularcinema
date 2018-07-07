import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrivateComponent } from './page-private.component';

describe('PagePrivateComponent', () => {
  let component: PagePrivateComponent;
  let fixture: ComponentFixture<PagePrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
