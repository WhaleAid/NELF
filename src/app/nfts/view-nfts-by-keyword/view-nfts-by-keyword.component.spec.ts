import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNftsByKeywordComponent } from './view-nfts-by-keyword.component';

describe('ViewNftsByKeywordComponent', () => {
  let component: ViewNftsByKeywordComponent;
  let fixture: ComponentFixture<ViewNftsByKeywordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNftsByKeywordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNftsByKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
