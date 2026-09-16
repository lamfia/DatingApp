import { Routes } from '@angular/router';
import { Home } from '../Features/home/home';
import { MembersList } from '../Features/member/members-list/members-list';
import { MembersDetailed } from '../Features/member/members-detailed/members-detailed';
import { Lists } from '../Features/lists/lists';
import { Messages } from '../Features/messages/messages';

export const routes: Routes = [
{path:'', component:Home},
{path:'members', component:MembersList},
{path:'members/:id', component:MembersDetailed},
{path:'lists', component:Lists},
{path:'messages', component:Messages},
{path:'**', component:Home},
];
