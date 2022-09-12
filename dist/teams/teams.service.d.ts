import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsService {
    teamRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;
    create(team: CreateTeamDto): Promise<{
        id: string;
        email: string;
        teamName: string;
        leaderName: string;
        leaderId: string;
        department: string;
        members: [];
    }>;
    findAll(): string;
    findOne(teamName: string): Promise<FirebaseFirestore.DocumentData>;
    update(teamName: string, team: UpdateTeamDto): Promise<FirebaseFirestore.WriteResult>;
    remove(teamName: string): Promise<FirebaseFirestore.WriteResult>;
}
