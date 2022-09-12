import { Injectable } from '@nestjs/common';
import { IsDate, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { db } from 'src/main';
import { TeamsService } from '../teams.service';

/**
 * @Class to validate team as a unique team name
 */
@Injectable()
@ValidatorConstraint()
export class IsTeamUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private teamsService: TeamsService) { }

  soRef = db.collection('teams');
  async validate(teamName: any, validationArguments?: ValidationArguments): Promise<boolean> {
    console.log(teamName);
    const team = await this.teamsService.findOne(teamName);
    console.log(team);
    return !!!team;
  }
}

export function IsTeamUnique(valitionOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: valitionOptions,
      constraints: [],
      validator: IsTeamUniqueConstraint,
    });
  };
}

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  @IsTeamUnique({
    message: "teamName already exists. Please choose a unique one."
  })
  teamName: string;
  leaderName: string;
  leaderId: string;
  teamMembers: [];
}
