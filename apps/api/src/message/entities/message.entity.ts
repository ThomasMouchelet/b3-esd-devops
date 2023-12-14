import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("message")
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    content: string;

    @Column()
    username: string;
}
