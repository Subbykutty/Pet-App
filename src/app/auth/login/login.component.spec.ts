// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { LoginComponent } from './login.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('LoginComponent', () => {
//   let componentInstance: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports:[ReactiveFormsModule,RouterTestingModule],
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     componentInstance = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(componentInstance).toBeTruthy();
//   });

//   it('check the validation for name and password',()=>{
//     fixture.detectChanges();
//     fixture.whenStable().then(()=>{
//       const nameElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameElement');
//       nameElement.value='';
//       nameElement.dispatchEvent(new Event('input'));

//       const passwordElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#passwordElement');
//       passwordElement.value='';
//       passwordElement.dispatchEvent(new Event('input'));

//       fixture.detectChanges();
//       fixture.whenStable().then(()=>{
//         const nameValidator : HTMLSpanElement = fixture.debugElement.nativeElement.querySelector('#nameRequired');
//         expect(nameValidator).not.toBeNull();
//         expect(nameValidator.innerHTML).toEqual('Valid User Name is required');

//         const passwordValidator : HTMLSpanElement = fixture.debugElement.nativeElement.querySelector('#passwordRequired');
//         expect(passwordValidator).not.toBeNull();
//         expect(passwordValidator.innerHTML).toEqual('Valid Password is required');
//       })
//     })
//   })

// });








// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// // import { ReactiveFormsModule } from '@angular/forms';

// // fdescribe('LoginComponent', () => {
// //   let component: LoginComponent;
// //   let fixture: ComponentFixture<LoginComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       imports:[ReactiveFormsModule],
// //       declarations: [ LoginComponent ]
// //     }).compileComponents();

// //     fixture = TestBed.createComponent(LoginComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   fit('should create', () => {
// //     expect(component).toBeTruthy();
// //   });

// // });


import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from '../../admin/admin.component';
import { Router } from '@angular/router';
import { DashboardComponent } from '../../admin/dashboard/dashboard.component';  
import { RouterOutlet } from '@angular/router';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { routes } from '../../app-routing.module';
import { AppComponent } from '../../app.component';


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let appcomponent :AdminComponent;
  let appFixture:ComponentFixture<AdminComponent>
  let router: Router; 
  let checkboxElement: HTMLInputElement;
  let button: ElementRef;
  let location :Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,RouterTestingModule.withRoutes(routes)],
      declarations: [ LoginComponent,AdminComponent,DashboardComponent,RouterOutlet ]
    }).compileComponents();
  });

  beforeEach(()=>{

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location=TestBed.inject(Location);
    fixture = TestBed.createComponent(LoginComponent);
    checkboxElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();

    appFixture = TestBed.createComponent(AdminComponent);
    appcomponent = appFixture.componentInstance;
    router.initialNavigation();

  })

  it('should navigate to the specified route when button is clicked', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');

    const button = fixture.nativeElement.querySelector('button');
    button.click();
    
    expect(navigateSpy).toHaveBeenCalledWith('/admin/dashboard');
  });
  //Input Properly Working or Not Starts

it('check for the value form',()=>{
  fixture.detectChanges();
  fixture.whenStable().then(()=>{
    const inputElement : HTMLInputElement= fixture.debugElement.nativeElement.querySelector('#nameElement')
    inputElement.value='Subash';
    inputElement.dispatchEvent(new Event('input'));
fixture.detectChanges();
fixture.whenStable().then(()=>{
  expect(component.name.value).toEqual('Subash');
})
})
})
it('check for the value form',()=>{
  fixture.detectChanges();
  fixture.whenStable().then(()=>{
    const inputElement : HTMLInputElement= fixture.debugElement.nativeElement.querySelector('#passwordElement')
    inputElement.value='MY@123';
    inputElement.dispatchEvent(new Event('input'));

fixture.whenStable().then(()=>{
  expect(component.password.value).toEqual('My@123');
})
})
})
//Input Properly Working or Not Ends  

// Button Clicked Starts

it('should call onButtonClick when clicked',(() => {
	spyOn(component, 'loginbtn');

	let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

}));
//Button Clicked Ends 


//Bg Image Starts 
it('should set the correct background image URL', () => {
  const imageUrl = '../../assets/Login_bg1.png';
  component.imageUrl = imageUrl;
  
  fixture.detectChanges();

  const container = element.querySelector('.img-div');
  expect(container.style.backgroundImage).toBe(`url(${imageUrl})`);
});
it('should set the correct background image URL', () => {
 
  const myImg = '../../assets/Login_bg2.png';
  component.myImg = myImg;
  fixture.detectChanges();

  const container = element.querySelector('.my-container');
  expect(container.style.backgroundImage).toBe(`url(${myImg})`);
});
//Bg Images Ends

Check Box Check Starts
it('should set the checkbox value to true when checked', () => {
  checkboxElement.checked = true;
  checkboxElement.dispatchEvent(new Event('change'));
  fixture.detectChanges();

  expect(component.isChecked).toBe(true);
});

it('should set the checkbox value to false when unchecked', () => {
  checkboxElement.checked = false;
  checkboxElement.dispatchEvent(new Event('change'));
  fixture.detectChanges();

  expect(component.isChecked).toBe(false);
});

//Check Box Check Ends
//Routing Starts
it('should navigate to the "/admin/dashboard" route when the button is clicked', () => {
  appFixture.detectChanges();
  appFixture.whenStable().then(()=>{
    expect(location.path()).toEqual('/admin');
  })
});
//Routing Ends

//h1 Starts
it('should render title in a h3 tag',async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
expect(compiled.querySelector('h3').textContent).toContain('Welcome to angular-unit-test!');
}));
//h1 Ends
});
