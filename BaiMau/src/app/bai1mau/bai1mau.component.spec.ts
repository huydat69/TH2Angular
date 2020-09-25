import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1mauComponent } from './bai1mau.component';

describe('Bai1mauComponent', () => {
  let component: Bai1mauComponent;
  let fixture: ComponentFixture<Bai1mauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1mauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1mauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
