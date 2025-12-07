import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";
import { Donasi } from '../model/table/Donasi'

export class T_getMyDonasi_headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}

export type T_getMyDonasi = (request: {
  headers: T_getMyDonasi_headers
}, response: Response) => Promise<Donasi[]>;

export const method = 'get';
export const url_path = '/my-donasi';
export const alias = 'getMyDonasi';
