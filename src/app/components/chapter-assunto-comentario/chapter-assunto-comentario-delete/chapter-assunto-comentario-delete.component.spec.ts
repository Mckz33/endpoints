import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoComentarioDeleteComponent } from './chapter-assunto-comentario-delete.component';

describe('ChapterAssuntoComentarioDeleteComponent', () => {
  let component: ChapterAssuntoComentarioDeleteComponent;
  let fixture: ComponentFixture<ChapterAssuntoComentarioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoComentarioDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoComentarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
