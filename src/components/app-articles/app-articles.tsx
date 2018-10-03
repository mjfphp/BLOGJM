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
    let i=0;
    this.articles.map((article)=>{
      if(i%3 == 0)  elts.push(<div class="row">);
        elts.push(<app-article-card article={article}/>)
      if(i%3==2) elts.push(</div>);
      i++;
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
