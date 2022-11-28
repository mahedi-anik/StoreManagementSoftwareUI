import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSkinsComponent } from './sidebar-skins.component';

describe('SidebarSkinsComponent', () => {
  let component: SidebarSkinsComponent;
  let fixture: ComponentFixture<SidebarSkinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSkinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
