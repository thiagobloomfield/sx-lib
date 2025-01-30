import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SxBasicCardComponent } from './basic-card.component';

describe('BasicCardComponent', () => {
  let component: SxBasicCardComponent;
  let fixture: ComponentFixture<SxBasicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SxBasicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SxBasicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
