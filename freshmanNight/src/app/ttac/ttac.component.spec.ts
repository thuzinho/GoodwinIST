import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtacComponent } from './ttac.component';

describe('TtacComponent', () => {
  let component: TtacComponent;
  let fixture: ComponentFixture<TtacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
