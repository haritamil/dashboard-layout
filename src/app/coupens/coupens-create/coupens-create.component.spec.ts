import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupensCreateComponent } from './coupens-create.component';

describe('CoupensCreateComponent', () => {
  let component: CoupensCreateComponent;
  let fixture: ComponentFixture<CoupensCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoupensCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupensCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
