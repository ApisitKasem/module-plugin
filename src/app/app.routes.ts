import { Routes } from '@angular/router';
import {PluginComponent} from './pages/plugin/plugin/plugin.component';
import {DashboardPageComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: PluginComponent },
  { path: 'dashboard', component: DashboardPageComponent}
];
