import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRecipesComponent } from './manage-recipes.component';

describe('ManageRecipesComponent', () => {
  let component: ManageRecipesComponent;
  let fixture: ComponentFixture<ManageRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
