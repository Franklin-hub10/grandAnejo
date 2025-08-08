import { Routes } from '@angular/router';
import { HeroComponent }      from './components/hero/hero';       
import { FeaturesComponent }  from './components/features/features';
import { ProductsComponent }  from './components/products/products';


export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' }
];
