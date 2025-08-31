import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {

  let y= new App()
it('check the upp',()=>{
  expect(y.check()).toBe(100)
})
});
