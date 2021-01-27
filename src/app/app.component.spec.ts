import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture:ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }) .compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
    });
  });
  // beforeEach(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  // it('should create the app', () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'swethapractise'`, () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('swethapractise');
  // });

  // it(`should have as button 'swethapractise'`, async() => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   let mySpy = spyOn(app, "removeStoreListing");
  //   expect(mySpy).toBeDefined();
  //   const removeElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-test'));
  //   expect(removeElements.length).toBe(1);
  //   const el: HTMLElement = removeElements[0].nativeElement;
  //   el.click();
  //   fixture.detectChanges();
  //   expect(mySpy).toHaveBeenCalled();
  //   app.title='bhanupractise'
  //   // app.hide = false;
  //   fixture.detectChanges();

  //   //   const compiled = fixture.nativeElement;
  //   //     console.log(compiled.querySelector('.content span.testing'))
  //   // expect(compiled.querySelector('.content span.testing').textContent).toContain('bhanupractise app is running!');
  // });

 

  // it('should render title', () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   console.log(compiled.querySelector('.content span.testing'),'df')

  //   expect(compiled.querySelector('.content span.testing').textContent).toContain('swethapractise app is running!');
  // });
});
