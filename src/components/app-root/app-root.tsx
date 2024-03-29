import {Component} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})


export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <nav class="blue darken-3">
            <div class="nav-wrapper">
              <a href="/" class="brand-logo"><img class="image" src="/assets/icon/icon.png"/></a>

              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a >Bienvenue au blog de JAMAI MOHAMED</a></li>
              </ul>
            </div>
          </nav>
        </header>



        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/article/:id' component='app-article'/>
              <stencil-route url='/add' component='app-add' exact={true}/>
              <stencil-route url='/add/:id' component='app-add' />
              <stencil-route url='/delete/:id' component='app-confirm'  exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
