import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Users} from "./Users";
import {Homes} from "./Homes";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'int'})
    time: number;
    @Column({type: 'int'})
    price: number

    @ManyToOne(()=>Users,(Users)=>Users.id)
    Users

    @ManyToOne(()=>Homes,(Homes)=>Homes.id)
    Homes
}
