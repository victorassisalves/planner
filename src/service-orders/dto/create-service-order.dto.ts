import { IsDate, IsNotEmpty, IsNumberString, IsString } from 'class-validator';

// import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

// @ValidatorConstraint()
// class IsUniqueConstraint implements ValidatorConstraintInterface {
//   soRef = db.collection('serviceOrders');
//   validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
//     const snapshot = await this.soRef.where('capital', '==', true).get();
//     if (snapshot.empty) {
//       console.log('No matching documents.');
//       return;
//     }
//   }
//   defaultMessage?(validationArguments?: ValidationArguments): string {
//     throw new Error("Method not implemented.");
//   }
// }

// export function IsUnique(valitionOptions?: ValidationOptions) {
//   return function (object: object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: valitionOptions,
//       constraints: [],
//       validator: IsUniqueConstraint,
//     });
//   };
// }

export class CreateServiceOrderDto {
  @IsNotEmpty()
  @IsString()
  // @IsUnique()
  name: string;
  account: string;
  price: number;
  leader: string;
  @IsNotEmpty()
  serviceId: string;
  serviceName: string;
  // @IsNotEmpty()
  serviceOrderId: string;
  // @IsNumberString()
  year: number;
  // @IsDate()
  billingDate: Date;
  status: string;
  milestone: string;
  responsibleTeam: {
    teamId: string;
    teamMembers: [

    ]
  }
  billingOrders?: [
    {

    }
  ]
}