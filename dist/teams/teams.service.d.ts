import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsService {
    teamRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    create(team: CreateTeamDto): Promise<{
        id: string;
        teamName: string;
        leaderName: string;
        leaderId: string;
        teamMembers: [];
    }>;
    findAll(): string;
    findOne(teamName: string): Promise<FirebaseFirestore.DocumentData>;
    update(id: number, updateTeamDto: UpdateTeamDto): string;
    remove(id: number): string;
}
