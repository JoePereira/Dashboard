import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class DashboardData {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    
}
