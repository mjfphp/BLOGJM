import {Component, Method, Prop, State} from '@stencil/core';
import { MatchResults , RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-confirm',
  styleUrl: 'app-confirm.css',
  shadow: true
})
export class AppConfirm {
  @Prop() match: MatchResults;
  @State() id:string;
  @Prop() history:RouterHistory;
  @Method()
  componentWillLoad(){
    this.id=this.match.params.id;
  }
  delet(){
    let url="https://polymer-101-workshop.cleverapps.io/api/blogpost/"+this.id;
    return fetch(url, {
      method: "DELETE" // *GET, POST, PUT, DELETE, etc.
    })
  }
  supprimer(){
     this.delet();
     this.history.replace("/");
  }
  render() {
     return(

       <div class="container">
         <div class="row"/> <div class="row"/> <div class="row">
       <div class="col s8 m8">
         <h4 class="header">Confirmation de suppression</h4>
         <div class="card horizontal">
           <div class="card-stacked">
             <div class="card-content">
                  Voulez-vous vraiment supprimer cet article
             </div>
             <div class="card-action">
                 <button class="red red accent-4  waves-effect waves-light btn-small" onClick={() => this.supprimer()} >
                      Confirmer
                 </button>
               &nbsp; &nbsp; &nbsp;
               <stencil-route-link url='/'>
                 <button class="cyan accent-4 waves-effect waves-light btn-small" >
                   Annuler
                 </button>
               </stencil-route-link>

             </div>
           </div>
         </div>
       </div>
         </div>
       </div>
     )
  }
}
