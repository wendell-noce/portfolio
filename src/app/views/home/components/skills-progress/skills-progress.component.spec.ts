import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsProgressComponent } from './skills-progress.component';

describe('SkillsProgressComponent', () => {
  let component: SkillsProgressComponent;
  let fixture: ComponentFixture<SkillsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
