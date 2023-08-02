import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./Users";

@Entity()
export class Homes{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:255})
    name:string;
    @Column({type:'varchar',length:255})
    address:string;
    @Column({type:'int'})
    acreage:number;
    @Column({type:'int'})
    price:number;
    @Column({type:'varchar',length:255})
    des:string;
    @Column({type:'varchar',length:255})
    status:string;
    @Column({type:'varchar',length:255})
    image:string;

    @ManyToOne(()=>Users,(Users)=>Users.id)
    Users: Users[]
}