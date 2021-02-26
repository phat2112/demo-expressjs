import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {User} from './User';

@Entity()
export class Workout {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column()
    time: number;

    @Column({length: 21844})
    image: string;

}
