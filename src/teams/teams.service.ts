import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FieldValue } from 'firebase-admin/firestore';
import { db } from 'src/main';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {

  teamRef = db.collection(`teams`);
  async create(team: CreateTeamDto) {
    const newTeam = this.teamRef.doc(team.teamName);
    const teamId = this.teamRef.doc();
    await newTeam.set({
      ...team,
      id: teamId.id,
      createdTime: FieldValue.serverTimestamp(),
    });
    return {
      ...team,
      id: teamId.id,
    };
  }

  findAll() {
    return `This action returns all teams`;
  }

  async findOne(teamName: string) {
    console.log(teamName);
    const res = await this.teamRef.doc(teamName).get();
    if (!res.data()) {
      console.log('No matching documents.');
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return res.data();
  }

  async update(teamName: string, team: UpdateTeamDto) {
    try {
      const res = await this.teamRef.doc(teamName).update({
        ...team,
        lastUpdatedTime: FieldValue.serverTimestamp(),
      });
      return res;
    } catch (error) {
      console.log(error);
      if (error.code == 5) {
        throw new HttpException('Team Not Found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error Updating Team. Details: ${error.details}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(teamName: string) {
    const res = await this.teamRef.doc(teamName).delete();
    return res;
  }
}
