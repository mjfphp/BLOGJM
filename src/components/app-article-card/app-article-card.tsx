import {Component, Prop} from '@stencil/core';


/*class article {
  id:string;
  title: string;
  article: string;
  creationDate: string;
  updateDate: string;
  autor: "string";
}*/

@Component({
  tag: 'app-article-card',
  styleUrl: 'app-article-card.css',
  shadow: true,
})




export class AppArticleCard {
  // @Prop() articles:Array<article>;
  @Prop() article:any;




  render() {
    return (
        <div class="col s3 m3">
        <h4 class="header">{this.article.title}</h4>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>Date de creation : {this.article.creationDate}</p>
              <p>Ecrit par : {this.article.autor}</p>
            </div>
            <div class="card-action">
              <stencil-route-link url='/article/:id'>
                <button class="blue darken-3 waves-effect waves-light btn-small">
                  LIRE
                </button>
              </stencil-route-link>
            </div>
          </div>
        </div>
      </div>
  );
  }
}
