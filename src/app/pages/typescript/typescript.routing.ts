import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript.component';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { WhatIsComponent } from './introduccion/whatis/whatis.component';
import { EcmascriptComponent } from './introduccion/ecmascript/ecmascript.component';
import { WhatIsTSComponent } from './introduccion/whatists/whatists.component';

const routes: Routes = [
  {
    path: '',
    component: TypescriptComponent,
  },
  {
    path: 'introduccion',
    component: IntroduccionComponent,
  },
  {
    path: 'que-es-javascript',
    component: WhatIsComponent,
  },
  {
    path: 'ecmascript',
    component: EcmascriptComponent,
  },
  {
    path: 'que-es-typescript',
    component: WhatIsTSComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeScriptRoutingModule {}
