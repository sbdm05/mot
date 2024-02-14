import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium3Page } from './cover-letter-premium3.page';

describe('CoverLetterPremium3Page', () => {
  let component: CoverLetterPremium3Page;
  let fixture: ComponentFixture<CoverLetterPremium3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLetterPremium3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterPremium3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
