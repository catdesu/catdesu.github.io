import { Injectable } from '@angular/core';
import socials from '../../assets/data/socials.json';
import { Social } from '../interfaces/social';

@Injectable({
  providedIn: 'root',
})
export class SocialsService {
  constructor() {}

  getAll(): Social[] {
    return socials;
  }
}
