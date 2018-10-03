import {Component, Prop,State} from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-article',
  styleUrl: 'app-article.css',
  shadow: true
})
export class AppArticle {
  @Prop() match: MatchResults;
  @State() article:any;

  componentWillLoad() {
  let id=this.match.params.id
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
      .then(response => response.json())
      .then(data => {
        this.article = data;
        console.log(this.article)
      });
  }



  render() {
    if (this.match && this.match.params.id) {
      return (
        <div class="app-article">
          BOBO BOBO
          {this.article.article}
        </div>
      );

    }
  }
}
