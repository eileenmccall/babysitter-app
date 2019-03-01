import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HoursCalculatorComponent } from './hours-calculator/hours-calculator.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        HoursCalculatorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
