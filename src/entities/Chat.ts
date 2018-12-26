import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Message from "./Message";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @CreateDateColumn() createdAt: String;
  @UpdateDateColumn() updatedAt: String;
}

export default Chat;
