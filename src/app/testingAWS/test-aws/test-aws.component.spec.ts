import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAwsComponent } from './test-aws.component';

describe('TestAwsComponent', () => {
  let component: TestAwsComponent;
  let fixture: ComponentFixture<TestAwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
