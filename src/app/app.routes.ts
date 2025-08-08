import { Routes } from '@angular/router';

import { HeroComponent }     from './components/hero/hero';
import { AboutComponent }    from './components/about/about';
import { MenuComponent }     from './components/menu/menu';
import { GalleryComponent }  from './components/gallery/gallery';
import { ContactComponent }  from './components/contact/contact';

export const routes: Routes = [
  { path: '',         component: HeroComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'contact',  component: ContactComponent },
  { path: '**',       redirectTo: '' }
];
