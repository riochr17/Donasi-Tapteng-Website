import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";

export class PublicDonasi {
  @IsNotEmpty({ message: 'anonim cannot be empty' })
  @Transform((param?: any): boolean | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : (param?.value === 'true' || ((typeof param?.value === 'boolean') && param?.value)))
  @IsBoolean({ message: 'anonim must be a boolean' })
  anonim!: boolean
  @IsNotEmpty({ message: 'nama cannot be empty' })
  @IsString({ message: 'nama must be a string' })
  nama!: string
  @IsNotEmpty({ message: 'email cannot be empty' })
  @IsString({ message: 'email must be a string' })
  email!: string
  @IsNotEmpty({ message: 'mata_uang cannot be empty' })
  @IsString({ message: 'mata_uang must be a string' })
  mata_uang!: string
  @IsNotEmpty({ message: 'nominal cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'nominal must be a number (decimal)' })
  nominal!: number
  @IsNotEmpty({ message: 'nominal_rupiah cannot be empty' })
  @Transform((param?: any): number | null => (param?.value === null || param?.value === undefined || param?.value === '') ? null : parseFloat(param.value))
  @IsNumber({}, { message: 'nominal_rupiah must be a number (decimal)' })
  nominal_rupiah!: number
  @IsOptional()
  @IsString({ message: 'pesan must be a string' })
  pesan?: string
  @IsNotEmpty({ message: 'tanggal cannot be empty' })
  @IsString({ message: 'tanggal must be a string' })
  tanggal!: string
  @IsNotEmpty({ message: 'kewarganegaraan cannot be empty' })
  @IsString({ message: 'kewarganegaraan must be a string' })
  kewarganegaraan!: string
}