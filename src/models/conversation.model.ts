import { Guid } from 'guid-typescript';
import { MessageModel } from './message.model';
import { UserModel } from './user.model';

export class ConversationModel {
  id = Guid.create();
  messages!: MessageModel[];
}
