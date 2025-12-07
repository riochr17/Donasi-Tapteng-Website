import { Response } from "express";
import { ClassConstructor, Transform, Type, plainToInstance } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsBoolean, IsOptional, IsISO8601, IsString, IsEnum, ValidateNested, IsArray, ValidationError, validateOrReject } from "class-validator";
import { PublicDonasi } from '../schema/PublicDonasi'



export type T_getAllValidDonasi = (request: {

}, response: Response) => Promise<PublicDonasi[]>;

export const method = 'get';
export const url_path = '/donasi';
export const alias = 'getAllValidDonasi';
