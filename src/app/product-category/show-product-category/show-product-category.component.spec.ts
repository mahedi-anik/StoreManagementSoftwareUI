import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductCategoryComponent } from './show-product-category.component';

describe('ShowProductCategoryComponent', () => {
  let component: ShowProductCategoryComponent;
  let fixture: ComponentFixture<ShowProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
