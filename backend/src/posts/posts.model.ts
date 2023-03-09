import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {Topics} from "../topics/topics.model";

interface PostCreationAttrs{
    name: string
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts, PostCreationAttrs>{
    @ApiProperty({example: '1', description: 'ID Topic'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'Title', description: 'Post title'})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;
    @ApiProperty({example: 'Description ... ... ...', description: 'Description post'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    description: string;

    @ApiProperty({example: 'image.png', description: 'Name image post'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

    @ForeignKey(() => Topics)
    @Column({type: DataType.INTEGER})
    topicId: number;

    @BelongsTo(() => Topics)
    topic: Topics
}