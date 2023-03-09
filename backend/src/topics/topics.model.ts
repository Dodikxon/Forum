import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Posts} from "../posts/posts.model";

interface TopicsCreationAttrs{
    name: string
}

@Table({tableName: 'topics'})
export class Topics extends Model<Topics, TopicsCreationAttrs>{
    @ApiProperty({example: '1', description: 'ID Topic'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'Game', description: 'Topic name'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;
    @HasMany(() => Posts)
    posts: Posts[];
}