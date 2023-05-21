import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoReadComponent } from './chapter-assunto-read.component';

describe('ChapterAssuntoReadComponent', () => {
  let component: ChapterAssuntoReadComponent;
  let fixture: ComponentFixture<ChapterAssuntoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
