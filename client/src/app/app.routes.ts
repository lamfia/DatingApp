import { Routes } from '@angular/router';
import { Home } from '../Features/home/home';
import { MembersList } from '../Features/member/members-list/members-list';
import { MembersDetailed } from '../Features/member/members-detailed/members-detailed';
import { Lists } from '../Features/lists/lists';
import { Messages } from '../Features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';
import { TestErrors } from '../Features/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';

export const routes: Routes = [
    { path: '', component: Home },
    {
        //Cosi si racchiude un gruppo di auth route control
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            { path: 'members', component: MembersList },
            { path: 'members/:id', component: MembersDetailed },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },
        ]
    },

    { path: 'errors', component: TestErrors },
    { path: 'server-error', component: ServerError },
    { path: 'not-found', component: NotFound },
    { path: '**', component: NotFound },
];
