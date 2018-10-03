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
  tag: 'app-articles',
  styleUrl: 'app-articles.css',
  shadow: true,
})




export class AppArticles {
  // @Prop() articles:Array<article>;
  @Prop() articles:any;





  render() {
    let elts=[];

    this.articles.map((article)=>{
        elts.push(<app-article-card article={article}/>)
    });


    return (
      <div class="app-home">
        <div class="container">
          <div class="row">
          {elts}
          </div>
        </div>
      </div>
    );
  }
}
