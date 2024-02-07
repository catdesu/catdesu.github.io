import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsIconsComponent } from './dev-tools-icons.component';

describe('DevToolsIconsComponent', () => {
  let component: DevToolsIconsComponent;
  let fixture: ComponentFixture<DevToolsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevToolsIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevToolsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
