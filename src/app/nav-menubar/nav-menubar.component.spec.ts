import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenubarComponent } from './nav-menubar.component';

describe('NavMenubarComponent', () => {
  let component: NavMenubarComponent;
  let fixture: ComponentFixture<NavMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
