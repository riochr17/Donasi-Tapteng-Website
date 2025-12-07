import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";
import { FormDataBuktiDonasi } from '../schema/FormDataBuktiDonasi'
import { Donasi } from '../model/table/Donasi'

export class T_uploadBuktiDonasi_headers {
  @IsNotEmpty({ message: 'authorization cannot be empty' })
  @IsString({ message: 'authorization must be a string' })
  authorization!: string
}
export class T_uploadBuktiDonasi_path {
  @IsNotEmpty({ message: 'id cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'id must be a number (decimal)' })
  id!: number
}
export class T_uploadBuktiDonasi_body {
  @IsNotEmpty({ message: 'data cannot be empty' })
  @IsObject()
  @ValidateNested()
  @Type(() => FormDataBuktiDonasi)
  data!: FormDataBuktiDonasi
}

export type T_uploadBuktiDonasi = (request: {
  headers: T_uploadBuktiDonasi_headers
  path: T_uploadBuktiDonasi_path
  body: T_uploadBuktiDonasi_body
}, response: Response) => Promise<Donasi>;

export const method = 'post';
export const url_path = '/my-donasi/:id/upload-bukti';
export const alias = 'uploadBuktiDonasi';
