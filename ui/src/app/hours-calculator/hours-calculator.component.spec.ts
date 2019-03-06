import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HoursCalculatorComponent } from './hours-calculator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HoursCalculatorComponent', () => {
  let component: HoursCalculatorComponent;
  let fixture: ComponentFixture<HoursCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursCalculatorComponent ],
      imports: [
        NgbModule,
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

  it('should have a submit method', () => {
    expect(component.submit).toBeDefined();
    expect(typeof component.submit === 'function').toBeTruthy();
  });

  it('button should be disabled unless form is valid', () => {
    const button = fixture.nativeElement.querySelector('#submitButton');
    expect(button.disabled).toBeTruthy();
    component.form.setValue({
      startTime: { hour: 17, minute: 0},
      endTime: { hour: 24, minute: 15},
      family: 'family2'
    });
    fixture.detectChanges();
    expect(button.disabled).toBeFalsy();
  });

  it('start time should be invalid if invalid time is entered', () => {
    component.form.controls['startTime'].setValue({
      hour: 6,
      minute: 30
    });
    expect(component.form.controls['startTime'].valid).toBeFalsy();
    component.form.controls['startTime'].setValue({
      hour: 18,
      minute: 0
    });
    expect(component.form.controls['startTime'].valid).toBeTruthy();
  });
});
