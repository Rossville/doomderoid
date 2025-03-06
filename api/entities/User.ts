import 'reflect-metadata';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('user')
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string

    @Column("text",{array: true})
    interest: string[]
}