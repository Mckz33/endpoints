import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoComentarioUpdateComponent } from './chapter-assunto-comentario-update.component';

describe('ChapterAssuntoComentarioUpdateComponent', () => {
  let component: ChapterAssuntoComentarioUpdateComponent;
  let fixture: ComponentFixture<ChapterAssuntoComentarioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoComentarioUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoComentarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
