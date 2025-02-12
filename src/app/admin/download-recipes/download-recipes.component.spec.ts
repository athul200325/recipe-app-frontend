import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadRecipesComponent } from './download-recipes.component';

describe('DownloadRecipesComponent', () => {
  let component: DownloadRecipesComponent;
  let fixture: ComponentFixture<DownloadRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadRecipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
