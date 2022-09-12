import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceOrderDto } from './dto/create-service-order.dto';
import { UpdateServiceOrderDto } from './dto/update-service-order.dto';
// Import the functions you need from the SDKs you need
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../../firebase-auth.json');

// Initialize Firebase
initializeApp({ credential: cert(serviceAccount) });

const db = getFirestore();

@Injectable()
export class ServiceOrdersService {
  docRef = db.collection('serviceOrders');
  /**
   * 
   * @param so The Service Order Object
   * @returns {so} with the DB ID
   */
  async create(so: CreateServiceOrderDto): Promise<any> {
    const newSo = this.docRef.doc();
    await this.docRef.doc(newSo.id).set({
      ...so,
      id: newSo.id,
      createdTime: FieldValue.serverTimestamp(),
    });
    return {
      ...so,
      id: newSo.id,
    };
  }

  async findAll() {
    const first = this.docRef.orderBy('leader', 'desc').limit(10);
    const snapshot = await first.get();
    const soList = [];
    snapshot.forEach(so => {
      soList.push(so.data());
    });
    // Get the last document
    // const last = snapshot.docs[snapshot.docs.length - 1];

    // Construct a new query starting at this document.
    // Note: this will not have the desired effect if multiple
    // cities have the exact same population value.
    // const next = this.docRef.orderBy('leader').orderBy('createdTime', 'desc')
    // .startAfter(last)
    //   .limit(10);

    // Use the query for pagination
    // ...
    return soList;
  }

  async findOne(id: string) {
    const res = await this.docRef.doc(id).get();
    console.log(res.data());
    if (!res.data()) {
      console.log('No matching documents.');
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return res.data();
    // return `This action returns a #${id} serviceOrder`;
  }

  async update(id: string, so: UpdateServiceOrderDto) {
    try {
      const res = await this.docRef.doc(id).update({
        ...so,
        lastUpdatedTime: FieldValue.serverTimestamp(),
      });
      return res;
    } catch (error) {
      console.log(error);
      if (error.code == 5) {
        throw new HttpException('Service Order Not Found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(`Error Updating Service Order. Details: ${error.details}`,
        HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    console.log(id);
    const res = await this.docRef.doc(id).delete();
    console.log(res);
    // if (index == -1) {
    //   throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    // }
    return res;
  }
}
