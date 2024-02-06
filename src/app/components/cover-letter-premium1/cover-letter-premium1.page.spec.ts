import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoverLetterPremium1Page } from './cover-letter-premium1.page';

describe('CoverLetterPremium1Page', () => {
  let component: CoverLetterPremium1Page;
  let fixture: ComponentFixture<CoverLetterPremium1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLetterPremium1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverLetterPremium1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
