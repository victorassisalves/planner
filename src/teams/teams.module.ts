import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { IsTeamUniqueConstraint } from './dto/create-team.dto';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService, IsTeamUniqueConstraint]
})
export class TeamsModule { }
