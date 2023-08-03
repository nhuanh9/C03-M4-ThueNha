import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:255})
    name:string;

    @Column({type:'int'})
    age:number;

    @Column({type:'varchar',length:255})
    userName:string;

    @Column({type:'varchar',length:255})
    passWord:string;

    @Column({type:'varchar',length:255})
    role:string;
}