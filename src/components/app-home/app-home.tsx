import {Component, Method, State} from '@stencil/core';

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
  @Method()

  render() {
    return (
      <div class="app-home">
        <div class="container">
        <div class="row">
          <div class="col-2"></div>
          <stencil-route-link url='/add'>
            <button class="btn-floating btn-large  waves-effect waves-light orange darken-2">
              +
            </button>
          </stencil-route-link>

        </div>
            <app-articles articles={this.articles}></app-articles>
        </div>
      </div>
    );
  }
}
