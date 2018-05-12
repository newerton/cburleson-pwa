import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  slug: string;
  description: string;
  date: string;
  format?: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public items: Item[] = [];

  constructor() {

    this.items = [
      {
        title: 'JavaScript ternary operator - shortcut to the if statement',
        slug: 'javascript-ternary-operator',
        description: 'Example of the conditional (ternary) operator, which is frequently used as a shortcut for the if statement.',
        date: '2018-01-17',
        format: 'text/markdown',
        image: '/assets/img/javascript-logo.svg'
      },
      {
        title: 'Respond to a button click with an observable',
        slug: 'respond-to-a-button-click-with-an-observable',
        description: 'A recipe for responding to a button click with an RxJS Observable.',
        date: '2018-12-04',
        format: 'text/markdown',
        image: '/assets/img/rxjs-logo.png'
      },
      {
        title: 'SPARQL examples - list classes',
        slug: 'sparql-examples-list-classes',
        description: 'Example SPARQL queries that can help you list the classes in an ontology.',
        date: '2017-12-19',
        format: 'text/markdown',
        image: '/assets/img/sparql-logo.png'
      },
      {
        title: 'Format currency in Angular',
        slug: 'format-angular-currency',
        description: 'How to format a number to currency with the currency pipe in Angular.',
        date: '2016-04-29',
        format: 'text/markdown',
        image: '/assets/img/angular-logo.svg'
      }
    ];
  }

  getItemBySlug(slug): Item {
    return this.items.find(item => item.slug === slug);
  }

}