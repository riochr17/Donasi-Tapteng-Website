import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";
import { FormDataDonasi } from '../schema/FormDataDonasi'
import { Donasi } from '../model/table/Donasi'

export class T_buatDonasi_headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
export class T_buatDonasi_body {
  @IsNotEmpty({ message: 'data cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => FormDataDonasi)
  data!: FormDataDonasi
}

export type T_buatDonasi = (request: {
  headers: T_buatDonasi_headers
  body: T_buatDonasi_body
}, response: Response) => Promise<Donasi>;

export const method = 'post';
export const url_path = '/my-donasi';
export const alias = 'buatDonasi';
