import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoComentarioComponent } from './chapter-assunto-comentario.component';

describe('ChapterAssuntoComentarioComponent', () => {
  let component: ChapterAssuntoComentarioComponent;
  let fixture: ComponentFixture<ChapterAssuntoComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoComentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
