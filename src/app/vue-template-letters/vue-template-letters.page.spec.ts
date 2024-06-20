import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VueTemplateLettersPage } from './vue-template-letters.page';

describe('VueTemplateLettersPage', () => {
  let component: VueTemplateLettersPage;
  let fixture: ComponentFixture<VueTemplateLettersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VueTemplateLettersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VueTemplateLettersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
