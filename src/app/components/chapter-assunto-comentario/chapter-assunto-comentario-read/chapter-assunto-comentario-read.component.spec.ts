import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoComentarioReadComponent } from './chapter-assunto-comentario-read.component';

describe('ChapterAssuntoComentarioReadComponent', () => {
  let component: ChapterAssuntoComentarioReadComponent;
  let fixture: ComponentFixture<ChapterAssuntoComentarioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoComentarioReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoComentarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
