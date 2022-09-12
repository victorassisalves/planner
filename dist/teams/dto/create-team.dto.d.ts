import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { TeamsService } from '../teams.service';
export declare class IsTeamUniqueConstraint implements ValidatorConstraintInterface {
    private teamsService;
    constructor(teamsService: TeamsService);
    teamRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    validate(teamName: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare function IsTeamUnique(valitionOptions?: ValidationOptions): (object: object, propertyName: string) => void;
export declare class CreateTeamDto {
    teamName: string;
    leaderName: string;
    leaderId: string;
    teamMembers: [];
}
