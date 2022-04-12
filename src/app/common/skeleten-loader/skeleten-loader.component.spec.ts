import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletenLoaderComponent } from './skeleten-loader.component';

describe('SkeletenLoaderComponent', () => {
  let component: SkeletenLoaderComponent;
  let fixture: ComponentFixture<SkeletenLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletenLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletenLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
