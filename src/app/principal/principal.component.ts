import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  salsas = [
    {
      name: 'Ketchup',
      img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_1920/f_auto/q_auto/v1/dxp-images/heinz/International/Master/pg-Home/Spain/Property_1_ml-card-content-ketchup_l4cksz?_a=BAVAfVIB0'
    },
    {
      name: 'Mostaza',
      img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_1920/f_auto/q_auto/v1/dxp-images/heinz/International/Master/pg-Home/Spain/Property_1_ml-card-content-mostaza_yygraw?_a=BAVAfVIB0'
    },
    {
      name: 'Mayonesa',
      img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_1920/f_auto/q_auto/v1/dxp-images/heinz/International/Master/pg-Home/Spain/Property_1_ml-card-content-mayo_lqbbi0?_a=BAVAfVIB0'
    },
    {
      name: 'Barbacoa',
      img: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_1920/f_auto/q_auto/v1/dxp-images/heinz/International/Master/pg-Home/Spain/Property_1_ml-card-content-salsa_yw3kts?_a=BAVAfVIB0'
    }
  ];
}
