import { TestBed, async } from '@angular/core/testing';
import { WhatsThatFatherComponent } from './whatsthatfather.component';

describe('WhatsThatFatherComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhatsThatFatherComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(WhatsThatFatherComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
