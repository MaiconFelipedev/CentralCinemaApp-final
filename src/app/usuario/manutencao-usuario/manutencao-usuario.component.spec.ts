import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoUsuarioComponent } from './manutencao-usuario.component';

describe('ManutencaoUsuarioComponent', () => {
  let component: ManutencaoUsuarioComponent;
  let fixture: ComponentFixture<ManutencaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencaoUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
