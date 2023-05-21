import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoDeleteComponent } from './chapter-assunto-delete.component';

describe('ChapterAssuntoDeleteComponent', () => {
  let component: ChapterAssuntoDeleteComponent;
  let fixture: ComponentFixture<ChapterAssuntoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
