import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoUpdateComponent } from './chapter-assunto-update.component';

describe('ChapterAssuntoUpdateComponent', () => {
  let component: ChapterAssuntoUpdateComponent;
  let fixture: ComponentFixture<ChapterAssuntoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
