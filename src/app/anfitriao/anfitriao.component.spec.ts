import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfitriaoComponent } from './anfitriao.component';

describe('AnfitriaoComponent', () => {
  let component: AnfitriaoComponent;
  let fixture: ComponentFixture<AnfitriaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfitriaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfitriaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
