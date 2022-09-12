// import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

// @ValidatorConstraint()
// class IsUniqueConstraint implements ValidatorConstraintInterface {
//   validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {

    
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