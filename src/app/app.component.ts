import { Component, OnInit } from '@angular/core';
import { ConversationModel } from 'src/models/conversation.model';
import { UserModel } from 'src/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  public userA!: UserModel;
  public userB!: UserModel;
  public conversation!: ConversationModel;

  ngOnInit(): void {
    this.userA = new UserModel();
    this.userA.name = "Chat A";

    this.userB = new UserModel();
    this.userB.name = "Chat B";

    this.conversation = new ConversationModel();
    this.conversation.messages = [];
  }

  public returnMessage(model: ConversationModel){
    this.conversation = model;
  }
}
