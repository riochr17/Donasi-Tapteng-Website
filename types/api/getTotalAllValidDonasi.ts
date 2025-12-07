import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";



export type T_getTotalAllValidDonasi = (request: {

}, response: Response) => Promise<number>;

export const method = 'get';
export const url_path = '/total-donasi';
export const alias = 'getTotalAllValidDonasi';
