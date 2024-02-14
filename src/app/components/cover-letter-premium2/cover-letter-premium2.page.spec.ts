import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium2Page } from './cover-letter-premium2.page';

describe('CoverLetterPremium2Page', () => {
  let component: CoverLetterPremium2Page;
  let fixture: ComponentFixture<CoverLetterPremium2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLetterPremium2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterPremium2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
