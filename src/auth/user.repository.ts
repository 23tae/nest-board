import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredentialsDto } from "./dto/auto-credential.dto";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    // async getUserById(id: number) {
    //     return await this.findOneBy({id: id});
    // }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
      const { username, password } = authCredentialsDto;
      const user = this.create({ username, password });

      await this.save(user);
    }
}