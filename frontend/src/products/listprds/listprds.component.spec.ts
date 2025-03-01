import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrdsComponent } from './listprds.component';

describe('ListprdsComponent', () => {
  let component: ListPrdsComponent;
  let fixture: ComponentFixture<ListPrdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPrdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPrdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
