import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) { }

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':teamName')
  findOne(@Param('teamName') teamName: string) {
    return this.teamsService.findOne(teamName);
  }

  @Put(':teamName')
  update(@Param('teamName') teamName: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(teamName, updateTeamDto);
  }

  @Delete(':teamName')
  remove(@Param('teamName') teamName: string) {
    return this.teamsService.remove(teamName);
  }
}
