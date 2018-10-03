import {Component, Method, State} from '@stencil/core';

@Component({
  tag: 'app-add',
  styleUrl: 'app-add.css',
  shadow: true
})


export class AppAdd {
   @State() article:string;
   @State() author:string;
   @State() titre:string;
   @Method()


   submiter(e){
     e.preventDefault();
     //console.log(this.article);
     let art=document.getElementById("article");
     console.log(art)
    // console.log(this.titre);
    // console.log(this.author);
   }
  render() {
    return(
       <div class="app-add">
       <br/><br/>
          <div class="container">
            <div class="row">
            <stencil-route-link url='/'>
              <button class="btn btn-success btn-lg col-sm">
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
                   <form onSubmit={(e)=>this.submiter(e)}>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Titre :</label>
                       <div class="col-sm-4">
                         <input type="text"  id="titre" class="form-control"  placeholder="Titre"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label">Auteur : </label>
                       <div class="col-sm-3">
                         <input type="text"  id="auteur" class="form-control"  placeholder="Auteur"/>
                       </div>
                     </div>
                     <div class="form-group row">
                       <div class="col-sm-2"/>
                       <label  class="col-sm-2 col-form-label" >Article :</label>
                       <textarea  id="article"  class="form-control col-sm-4">
                       </textarea>
                       </div>
                     <div class="row">
                         <div class="col-sm-4"></div>
                       <button type="submit" class="btn btn-lg btn-primary" value="Submit">Submit</button>
                       &nbsp;
                     </div>
                   </form>
               </div>
       </div>

      );
  }
}
