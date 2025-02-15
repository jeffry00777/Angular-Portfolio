import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnowMeComponent } from './get-to-know-me.component';

describe('GetToKnowMeComponent', () => {
  let component: GetToKnowMeComponent;
  let fixture: ComponentFixture<GetToKnowMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetToKnowMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetToKnowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
