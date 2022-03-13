import {MessageRepository} from "./messages.repository"
import {Injectable} from "@nestjs/common"

@Injectable()
export class MessagesService {
    messageRepo: MessageRepository 
    constructor(public Repo: MessageRepository) {
    }

    findOne(id : string) {
        return this.messageRepo.findOne(id)
    }
    findAll() {
        return this.messageRepo.findAll()
    }
    create(content: string) {
        return this.messageRepo.create(content)
    }
}