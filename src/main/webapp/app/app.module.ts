import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { BlahSharedModule, UserRouteAccessService } from './shared';
import { BlahAppRoutingModule} from './app-routing.module';
import { BlahHomeModule } from './home/home.module';
import { BlahAdminModule } from './admin/admin.module';
import { BlahAccountModule } from './account/account.module';
import { BlahEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BlahAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BlahSharedModule,
        BlahHomeModule,
        BlahAdminModule,
        BlahAccountModule,
        BlahEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BlahAppModule {}
