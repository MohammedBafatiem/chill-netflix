import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsomeComponentComponent } from './awsome-component.component';

describe('AwsomeComponentComponent', () => {
  let component: AwsomeComponentComponent;
  let fixture: ComponentFixture<AwsomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
