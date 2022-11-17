import { UserModel } from "./user.model";

export class MessageModel {
  message = "";
  author!: UserModel;
}