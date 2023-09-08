import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQoutesComponent } from './my-qoutes.component';

describe('MyQoutesComponent', () => {
  let component: MyQoutesComponent;
  let fixture: ComponentFixture<MyQoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyQoutesComponent]
    });
    fixture = TestBed.createComponent(MyQoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
