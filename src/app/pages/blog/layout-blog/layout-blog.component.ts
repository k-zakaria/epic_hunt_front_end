import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-layout-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './layout-blog.component.html',
  styleUrl: './layout-blog.component.css',
})
export class LayoutBlogComponent {
  title$!: Observable<string>;
  router = inject(Router);
  route = inject(ActivatedRoute);
  categoryService = inject(CategoryService);

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.title$ = this.route.firstChild?.title as Observable<string>;
    });

    this.categoryService.all().subscribe((res) => {
      this.categoryService.categories.set(res);
    });
  }
}
