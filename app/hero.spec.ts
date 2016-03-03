import 'zone.js';
import 'reflect-metadata';

/// <reference path="../typings/browser.d.ts" />
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {Hero} from './hero';

describe('Hero', () => {
  it('has name given in the constructor', () => {
    let hero: Hero = {"id": 1, "name": "Super Cat"};
    expect(hero.name).toBe('Super Cat');
  });
  it('has id given in the constructor', () => {
    let hero: Hero = {"id": 1, "name": "Super Cat"};
    expect(hero.id).toBe(1);
  });
})
