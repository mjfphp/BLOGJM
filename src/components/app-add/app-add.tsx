import {Component, Method, Prop, State} from '@stencil/core';
import { RouterHistory ,MatchResults} from '@stencil/router';

@Component({
  tag: 'app-add',
  styleUrl: 'app-add.css',
  shadow: true
})


export class AppAdd {

   @State() article:string;
   @State() author:string;
   @State() titre:string;
   @State() cmpt:number;
   @State() art:any;
   @State() method:any;
   @State() id:string;
   @State() tete:string;
   @Prop() history: RouterHistory;
   @Prop() match: MatchResults;
   @Method()
   getArt(id){
     let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id;
     return fetch(url)
       .then(response => response.json())
       .then(data => {
         this.art = data;
         this.author=data.autor;
         this.article=data.article;
         this.titre=data.title;
         this.id=data._id;
         this.tete="MODIFIER UN ARTICLE";
         this.method="PUT";
       });
   }
   componentWillLoad() {
        this.tete="AJOUTER UN ARTICLE";
        let id=this.match.params.id;
        if(id){
          this.getArt(id);
          this.method="POST"
        }
   }
   handleChangeArticle(event) {
    this.article=event.target.value;
   }
   handleChangeTitle(event) {
     this.titre = event.target.value;
   } handleChangeAuthor(event) {
       this.author = event.target.value;
   }

   vider(){
     this.history.replace("/");
   }
    modifier(){
      let postData = {
        article: this.article,
        title: this.titre,
        autor: this.author,
        _id:this.id
        // creationDate:new Date(),
      };

      let url="https://polymer-101-workshop.cleverapps.io/api/blogpost";
      return fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(postData), // body data type must match "Content-Type" header
      })
        .then(response =>
          response.json()
        ); // parses response to JSON
    }
   submitter(){
     let postData = {
       article: this.article,
       title: this.titre,
       autor: this.author
       // creationDate:new Date(),
     };

     let url="https://polymer-101-workshop.cleverapps.io/api/blogpost";
     return fetch(url, {
       method: "POST", // *GET, POST, PUT, DELETE, etc.
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(postData), // body data type must match "Content-Type" header
     })
       .then(response =>
           response.json()
       ); // parses response to JSON

   }
  submiter(e){
     e.preventDefault();
     if(this.method=="PUT"){
       this.modifier()
     }else{
       this.submitter();
     }

     this.vider();
     }




  render() {
     let el=[];
     if(this.cmpt>=144)
     {
       el.push(<div class="alert alert-danger" role="alert">
        L'article ne doit pas passer 144 caracteres !
       </div>)
     }else
       el=[];

    return(
       <div class="app-add">
       <br/><br/>
          <div class="container">

              <div class="row">
                   <div class="col-3"></div>
                   <div class="col-6">
                     <h1 class="text-muted">{this.tete}</h1>
                     <br/>
                   </div>
               </div>
                   <form onSubmit={(e)=>this.submiter(e)} id="MyForm">
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Titre :</label>
                       <div class="col-sm-4">
                         <input type="text" value={this.titre} id="titre" class="form-control"  onInput={(event) => this.handleChangeTitle(event)} placeholder="Titre"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Auteur : </label>
                       <div class="col-sm-3">
                         <input type="text" value={this.author} id="auteur" class="form-control"  onInput={(event) => this.handleChangeAuthor(event)} placeholder="Auteur"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label" >Article :</label>
                       <textarea  id="article"  value={this.article} class="form-control col-sm-6" onInput={(event) => this.handleChangeArticle(event)}>
                       </textarea>
                       </div>
                     <div class="row">
                         <div class="col-sm-4"></div>
                       <button type="submit" class="btn btn-lg btn-primary" value="Submit">Submit</button>
                       &nbsp; &nbsp; &nbsp;
                       <stencil-route-link url='/'>
                         <button class="btn btn-warning btn-lg">
                           RETOUR
                         </button>
                       </stencil-route-link>
                     </div>
                   </form>

         <div class="row">
           <div class="col-sm-4" />
           {el}
         </div>
       </div>
       </div>

      );
  }
}
