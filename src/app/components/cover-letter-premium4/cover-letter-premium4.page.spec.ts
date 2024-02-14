import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium4Page } from './cover-letter-premium4.page';

describe('CoverLetterPremium4Page', () => {
  let component: CoverLetterPremium4Page;
  let fixture: ComponentFixture<CoverLetterPremium4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLetterPremium4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterPremium4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
