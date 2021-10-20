import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  users$: Observable<User[]>;

  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiService) { }



  ngOnInit() {
    this.users$ = this.api.getData();
  }

  goTo() {
    this.navCtrl.navigateForward(['../', '5', 'details'], {
      relativeTo: this.route
    });
  }

}
