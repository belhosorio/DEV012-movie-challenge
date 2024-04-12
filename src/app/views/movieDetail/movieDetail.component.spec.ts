import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailComponent } from './movieDetail.component';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      providers: [ HttpClient, HttpHandler,
        { 
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '123' }
            }
          }
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});