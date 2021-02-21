import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListUrlComponent } from './product-list-url.component';

describe('ProductListUrlComponent', () => {
  let component: ProductListUrlComponent;
  let fixture: ComponentFixture<ProductListUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
