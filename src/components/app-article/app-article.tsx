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
          <div class="container">
            <div class="row"/>
            <br/>
              <br/>
            <div class="row">
              <div class="col-2"/>
          <div class="jumbotron">
            <h1 class="display-4"> {this.article.title}</h1>
            <p class="lead">{this.article.article}</p>
            <hr class="my-4"/>
            <blockquote class="blockquote">
              <p>Ecrit par : <code>{this.article.autor}  </code> | date de creation : <code> {this.article.creationDate}</code></p>
            </blockquote>
            <stencil-route-link url='/'>
              <button class="btn btn-primary btn-lg">
                retour
              </button>
            </stencil-route-link>
          </div>
            </div>
          </div>
        </div>
      );

    }
  }
}
