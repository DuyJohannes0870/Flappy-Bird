import { Component, OnInit } from '@angular/core';
import { trigger} from '@angular/animations';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animImageSlider', [
    ]),
  ]
})
export class MainComponent implements OnInit {

  counter: number = 0;
  images = [
    '../../../assets/yellowbird-upflap.gif',
    '../../../assets/blue.gif',
    '../../../assets/red.gif',
    '../../../assets/pink.gif',
    '../../../assets/robot.gif',
    '../../../assets/3mau.gif'

  ];


  constructor(private router: Router,private http:HttpClient) { }
  public data:any;
  ngOnInit(): void {
    this.getData();
  }
  async getData(){
    let temp= await this.http.get(environment.endpoint+"birds").toPromise();
    this.data=temp['birds'];
    console.log(this.data);
    

  }
  onNext() {
    if (this.counter != this.images.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  onNavigate(url){
    this.router.navigate([url])
  }
}
