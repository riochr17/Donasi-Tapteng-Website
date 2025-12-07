import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";
import { Donatur } from '../model/table/Donatur'

export class T_loginWithGoogle_body {
  @IsNotEmpty({ message: 'google_access_token cannot be empty' })
  @IsString({ message: 'google_access_token must be a string' })
  google_access_token!: string
}
class ReturnType_0 {
  @IsNotEmpty({ message: 'token cannot be empty' })
  @IsString({ message: 'token must be a string' })
  token!: string
  @IsNotEmpty({ message: 'user cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => Donatur)
  user!: Donatur
}

export type T_loginWithGoogle = (request: {
  body: T_loginWithGoogle_body
}, response: Response) => Promise<ReturnType_0>;

export const method = 'post';
export const url_path = '/login-with-google';
export const alias = 'loginWithGoogle';
