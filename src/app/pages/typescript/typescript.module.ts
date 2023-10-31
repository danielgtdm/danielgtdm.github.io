import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptComponent } from './typescript.component';
import { TypeScriptRoutingModule } from './typescript.routing';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { WhatIsComponent } from './introduccion/whatis/whatis.component';
import { EcmascriptComponent } from './introduccion/ecmascript/ecmascript.component';
import { WhatIsTSComponent } from './introduccion/whatists/whatists.component';

@NgModule({
  declarations: [
    TypescriptComponent,
    IntroduccionComponent,
    WhatIsComponent,
    EcmascriptComponent,
    WhatIsTSComponent,
  ],
  imports: [CommonModule, TypeScriptRoutingModule],
})
export class TypescriptModule {}
