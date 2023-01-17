import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBannerComponent } from './skill-banner.component';

describe('SkillBannerComponent', () => {
  let component: SkillBannerComponent;
  let fixture: ComponentFixture<SkillBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
