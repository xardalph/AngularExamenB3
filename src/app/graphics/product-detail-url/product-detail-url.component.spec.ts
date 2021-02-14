import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailUrlComponent } from './product-detail-url.component';

describe('ProductDetailUrlComponent', () => {
  let component: ProductDetailUrlComponent;
  let fixture: ComponentFixture<ProductDetailUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
