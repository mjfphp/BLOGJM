import {Component, Method, Prop, State} from '@stencil/core';
import { RouterHistory } from '@stencil/router';

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
  @Prop() history: RouterHistory;
   @Method()

   handleChangeArticle(event) {
    this.article=event.target.value;
    console.log(event.target.value)
   }
   handleChangeTitle(event) {
     this.titre = event.target.value;
   } handleChangeAuthor(event) {
       this.author = event.target.value;
   }

   vider(){
     this.history.replace("/");
   }

  submiter(e){
     e.preventDefault();

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
           response.json(),
            this.vider()
         ); // parses response to JSON



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
            <stencil-route-link url='/'>
              <button class="btn btn-warning btn-lg col-sm">
                RETOUR
              </button>
            </stencil-route-link>
            </div>
              <div class="row">
                   <div class="col-3"></div>
                   <div class="col-6">
                     <h1 class="text-muted">AJOUTER UN ARTICLE</h1>
                     <br/>
                   </div>
               </div>
                   <form onSubmit={(e)=>this.submiter(e)} id="MyForm">
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Titre :</label>
                       <div class="col-sm-4">
                         <input type="text"  id="titre" class="form-control"  onInput={(event) => this.handleChangeTitle(event)} placeholder="Titre"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Auteur : </label>
                       <div class="col-sm-3">
                         <input type="text"  id="auteur" class="form-control"  onInput={(event) => this.handleChangeAuthor(event)} placeholder="Auteur"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label" >Article :</label>
                       <textarea  id="article"  class="form-control col-sm-6" onInput={(event) => this.handleChangeArticle(event)}>
                       </textarea>
                       </div>
                     <div class="row">
                         <div class="col-sm-4"></div>
                       <button type="submit" class="btn btn-lg btn-primary" value="Submit">Submit</button>
                       &nbsp;
                     </div>
                   </form>
               </div>
         <br/>
         <div class="row">
           <div class="col-sm-4" />
           {el}
         </div>
       </div>

      );
  }
}
