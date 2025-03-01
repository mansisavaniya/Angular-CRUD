import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrdComponent } from './createprd.component';

describe('CreateprdComponent', () => {
  let component: CreatePrdComponent;
  let fixture: ComponentFixture<CreatePrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
