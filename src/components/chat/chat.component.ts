import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConversationModel } from 'src/models/conversation.model';
import { MessageModel } from 'src/models/message.model';
import { UserModel } from 'src/models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() user!: UserModel;
  @Input() conversation!: ConversationModel;
  @Output() returnMessage = new EventEmitter<ConversationModel>;

  public messages: MessageModel[] = [];
  public msg!: MessageModel;

  constructor() { }

  ngOnInit(): void {
    this.msg = new MessageModel();
    this.conversation = new ConversationModel();
    this.conversation.messages = this.messages;
  }

  public send(chatForm: NgForm): void {
    if(chatForm.valid) {
      this.msg.author = this.user;
      let newMsg = Object.assign({}, this.msg);
      this.conversation.messages.push(newMsg);
      this.msg.message = "";
      this.returnMessage.emit(this.conversation);
    }
  }

}
