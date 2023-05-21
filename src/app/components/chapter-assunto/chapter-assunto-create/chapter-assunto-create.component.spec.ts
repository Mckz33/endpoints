import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterAssuntoCreateComponent } from './chapter-assunto-create.component';

describe('ChapterAssuntoCreateComponent', () => {
  let component: ChapterAssuntoCreateComponent;
  let fixture: ComponentFixture<ChapterAssuntoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterAssuntoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterAssuntoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
