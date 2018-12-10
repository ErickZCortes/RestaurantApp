import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private subscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.onLogOut();
  }
  onLogOut() {
    this.authService.logout();
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
