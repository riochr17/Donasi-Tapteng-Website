import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class FormDataBuktiDonasi {
  @IsOptional()
  @IsString({ message: 'nama_pengirim must be a string' })
  nama_pengirim?: string
  @IsNotEmpty({ message: 'bank cannot be empty' })
  @IsString({ message: 'bank must be a string' })
  bank!: string
  @IsNotEmpty({ message: 'url_gambar_bukti cannot be empty' })
  @IsString({ message: 'url_gambar_bukti must be a string' })
  url_gambar_bukti!: string
  @IsOptional()
  @IsString({ message: 'pesan_donasi must be a string' })
  pesan_donasi?: string
}