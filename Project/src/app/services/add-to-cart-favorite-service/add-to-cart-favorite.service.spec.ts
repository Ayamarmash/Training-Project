import { TestBed } from '@angular/core/testing';

import { AddToCartFavService } from './add-to-cart-favorite.service';

describe('AddToCartFavService', () => {
  let service: AddToCartFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCartFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
