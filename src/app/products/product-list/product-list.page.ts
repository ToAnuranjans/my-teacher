import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goTo() {
    this.navCtrl.navigateForward(['../', '5', 'details'], {
      relativeTo: this.route
    });
  }

}
