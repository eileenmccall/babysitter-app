import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HoursCalculatorComponent } from './hours-calculator.component';

describe('HoursCalculatorComponent', () => {
  let component: HoursCalculatorComponent;
  let fixture: ComponentFixture<HoursCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursCalculatorComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an h1 with the title "Babysitter Hours Calculator"', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Babysitter Hours Calculator');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create form and controls', () => {
    component.ngOnInit();
    expect(component.form instanceof FormGroup).toBeTruthy();

    const controls = component.form.controls;
    expect(controls['startTime'] instanceof FormControl).toBeTruthy();
    expect(controls['endTime'] instanceof FormControl).toBeTruthy();
    expect(controls['family'] instanceof FormControl).toBeTruthy();
  });

  it('should create form and controls in template', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).not.toBeNull();

    expect(fixture.nativeElement.querySelector('#startTime')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#endTime')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('#family')).not.toBeNull();
  });

  it('form should be invalid if empty', () => {
    component.ngOnInit();
    expect(component.form.valid).toBeFalsy();
  });

  it('should be invalid unless all fields are supplied', () => {
    component.ngOnInit();
    expect(component.form.valid).toBeFalsy();
    component.form.controls['startTime'].setValue(new Date());
    expect(component.form.valid).toBeFalsy();
    component.form.controls['endTime'].setValue(new Date());
    expect(component.form.valid).toBeFalsy();
    component.form.controls['family'].setValue('family2');
    expect(component.form.valid).toBeTruthy();
  });
});
