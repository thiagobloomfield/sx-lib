import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SxIconSvgComponent } from './icon-svg.component';

describe('IconSvgComponent', () => {
  let component: SxIconSvgComponent;
  let fixture: ComponentFixture<SxIconSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SxIconSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SxIconSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
