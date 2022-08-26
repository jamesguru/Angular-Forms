import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuildersComponent } from './formbuilders.component';

describe('FormbuildersComponent', () => {
  let component: FormbuildersComponent;
  let fixture: ComponentFixture<FormbuildersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuildersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
