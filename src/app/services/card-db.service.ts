import { Injectable } from '@angular/core';
const cardData = require('../../assets/CardDB.json');

@Injectable({
  providedIn: 'root',
})
export class CardDBService {
  constructor() {}

  findAllCards() {
    return (cardData as any).data;
  }
}
