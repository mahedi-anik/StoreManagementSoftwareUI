import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { AddEditShelfComponent } from './add-edit-shelf.component';

describe('AddEditShelfComponent', () => {
  let component: AddEditShelfComponent;
  let fixture: ComponentFixture<AddEditShelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditShelfComponent ],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
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
