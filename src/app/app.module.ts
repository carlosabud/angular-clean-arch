import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ElephantRepository } from './core/repositories/elephant.repository';
import { DataModule } from './data/data.module';
import { ElephantMockRepository } from './data/repository/elephant-mock-repository/elephant-mock.repository';
import { ElephantWebRepository } from './data/repository/elephant-web-repository/elephant-web.repository';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, DataModule, PresentationModule],
  providers: [{ provide: ElephantRepository, useClass: ElephantWebRepository }],
  bootstrap: [AppComponent],
})
export class AppModule {}
