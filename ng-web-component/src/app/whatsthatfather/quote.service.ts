import { Injectable } from '@angular/core';
import { IQuote } from './quote';
import data from './quotes.data';

@Injectable({
    providedIn: 'root'
})
export class QuoteService {

    getQuote(): IQuote {
        return data[Math.floor(Math.random() * data.length)];
    }
}
