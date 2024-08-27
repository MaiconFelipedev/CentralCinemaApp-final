import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoFilmeComponent } from './manutencao-filme.component';

describe('ManutencaoFilmeComponent', () => {
  let component: ManutencaoFilmeComponent;
  let fixture: ComponentFixture<ManutencaoFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencaoFilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutencaoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
