import { Component, OnInit } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { LocalService } from 'src/app/services/local.service';
import { takeUntil } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count : any = [];
 
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();
  base64textString: any;


  constructor(private local:LocalService,private data:DataService){}
ngOnInit(): void {
const myKey = this.local.get("data");
//  console.log('DashboardKey--->',myKey);

 history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      }); 
      this.dashboard();
    }
    dashboard(){
     this.data.getMethod('utils/dashboard').then((res:any)=>{
      this.count=res.data;
      console.log('New Count-->',this.count)
      console.log('count checkk-->',this.count[0].adCount )
     });
  }

    ngOnDestroy(): void {
      this.unsubscriber.next();
      this.unsubscriber.complete();
    }


    handleFileSelect(evt:any){
      let files = evt.target.files;
      const file = files[0];

      
    if (files && file) {
        const reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt : any) {
     let binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log(btoa(binaryString));
    }

}


