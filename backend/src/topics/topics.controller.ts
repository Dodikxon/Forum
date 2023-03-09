import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TopicsService} from "./topics.service";
import {Topics} from "./topics.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {CreateTopicsDto} from "./dto/create-topics.dto";

@ApiTags('Topics')
@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService) {}

    @ApiOperation({summary: 'Create topic'})
    @ApiResponse({status: 201, type: Topics})
    @UseGuards(JwtAuthGuard)
    @Roles('Admin')
    @Post('/create')
    create(@Body() topicDto: CreateTopicsDto){
        return this.topicsService.createTopic(topicDto);
    }

    @ApiOperation({summary: 'Get all topics'})
    @ApiResponse({status: 200, type: Topics})
    @Get('')
    getAll(){
        return this.topicsService.getAllTopics()
    }

    @ApiOperation({summary: 'Get topic by id'})
    @ApiResponse({status: 200, type: Topics})
    @Get('/:id')
    getTopicById(@Param('id') id: number){
        return this.topicsService.getTopicById(id)
    }
}
