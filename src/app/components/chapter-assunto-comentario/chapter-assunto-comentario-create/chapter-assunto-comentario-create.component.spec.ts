import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoComentarioCreateComponent } from './chapter-assunto-comentario-create.component';

describe('ChapterAssuntoComentarioCreateComponent', () => {
  let component: ChapterAssuntoComentarioCreateComponent;
  let fixture: ComponentFixture<ChapterAssuntoComentarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoComentarioCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoComentarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
