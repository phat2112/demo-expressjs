import { getMaxListeners } from "process";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Workout} from './Workout';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column({length: 50})
    name: string;

    @Column({length: 254})
    email: string;

    @Column({length: 24})
    password: string;

    @Column({length: 11})
    phone: string;

    @Column({length: 21844})
    image: string;
}