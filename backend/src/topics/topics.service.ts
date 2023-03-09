import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {RolesService} from "../roles/roles.service";
import {Topics} from "./topics.model";
import {CreateTopicsDto} from "./dto/create-topics.dto";

@Injectable()
export class TopicsService {
    constructor(@InjectModel(Topics) private topicRepository: typeof Topics,
                private roleService: RolesService) {}


    async createTopic(dto: CreateTopicsDto){
        const topic = await this.topicRepository.create(dto)
        return topic
    }

    async getAllTopics(){
        const topic = await this.topicRepository.findAll(
            {include: {all: true}}
        )
    }

    async getTopicById(id: number){
        const topic = await this.topicRepository.findOne({where: {id}, include:{all: true}})
        return topic
    }
}
