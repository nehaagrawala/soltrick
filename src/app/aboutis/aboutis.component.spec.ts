import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutisComponent } from './aboutis.component';

describe('AboutisComponent', () => {
  let component: AboutisComponent;
  let fixture: ComponentFixture<AboutisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
