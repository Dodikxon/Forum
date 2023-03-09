import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

const isString = 'Must be a string'

export class CreateTopicsDto{
    @ApiProperty({example: 'Games', description: 'Name topic'})
    @IsString({message: isString})
    readonly name: string;
}