import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

const isString = 'Must be a string'

export class CreatePostsDto{
    @ApiProperty({example: 'title', description: 'Title post'})
    @IsString({message: isString})
    readonly title: string;
    @ApiProperty({example: 'Description ... ... ...', description: 'Description post'})
    @IsString({message: isString})
    readonly description: string;
    @ApiProperty({example: 'image.png', description: 'Image post'})
    @IsString({message: isString})
    image: string;
}