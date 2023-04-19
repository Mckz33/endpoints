import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterUpdadeComponent } from './chapter-updade.component';

describe('ChapterUpdadeComponent', () => {
  let component: ChapterUpdadeComponent;
  let fixture: ComponentFixture<ChapterUpdadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterUpdadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterUpdadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
