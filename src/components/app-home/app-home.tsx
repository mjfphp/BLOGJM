import {Component, State} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})

export class AppHome {
 // @Prop() articles:Array<article>;
  @State() articles:any;
  componentWillLoad() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost')
      .then(response => response.json())
      .then(data => {
        this.articles = data;
      });
  }
  render() {
    return (
      <div class="app-home">
            <app-articles articles={this.articles}></app-articles>
        </div>
    );
  }
}
