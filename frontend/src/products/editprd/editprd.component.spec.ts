import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprdComponent } from './editprd.component';

describe('EditprdComponent', () => {
  let component: EditprdComponent;
  let fixture: ComponentFixture<EditprdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditprdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
