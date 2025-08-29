import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second } from './second';

describe('Second', () => {

let y=new Second();

  it('should create', () => {
    expect(y.check()).toBe(1000)
  });
});
