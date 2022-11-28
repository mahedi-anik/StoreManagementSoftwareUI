import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShelfComponent } from './add-edit-shelf.component';

describe('AddEditShelfComponent', () => {
  let component: AddEditShelfComponent;
  let fixture: ComponentFixture<AddEditShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditShelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
