import { TestBed } from '@angular/core/testing';

import { FilmeFirestoreService } from './filme-firestore.service';

describe('FilmeFirestoreService', () => {
  let service: FilmeFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
