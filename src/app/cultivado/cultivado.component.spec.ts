import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivadoComponent } from './cultivado.component';

describe('CultivadoComponent', () => {
  let component: CultivadoComponent;
  let fixture: ComponentFixture<CultivadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CultivadoComponent]
    });
    fixture = TestBed.createComponent(CultivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
