import { Component,OnInit} from '@angular/core';
import { ConsumeWhetherService } from 'src/Services/consume-whether.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  whetherData:any;
  constructor(private consumeWhetherService:ConsumeWhetherService){}
  ngOnInit(){
    this.consumeWhetherService.GetWhetherDetails().subscribe(x=>{
      this.whetherData = x;
      console.log(this.whetherData);
    });
  }
}
