import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShelfComponent } from './show-shelf.component';

describe('ShowShelfComponent', () => {
  let component: ShowShelfComponent;
  let fixture: ComponentFixture<ShowShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
