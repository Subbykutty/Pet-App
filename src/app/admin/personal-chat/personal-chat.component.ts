import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.scss']
})
export class PersonalChatComponent {

  constructor(private router:Router){}
  pChat(){
    this.router.navigate(['/admin/chat'])
  }

}
