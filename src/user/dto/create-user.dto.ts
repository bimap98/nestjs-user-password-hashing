import {IsEmail, IsOptional, IsString} from "class-validator";
import {ApiProperty, OmitType} from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    @IsOptional()
    id? : number

    @ApiProperty()
    @IsString()
    nama_user : string

    @ApiProperty()
    @IsEmail()
    email : string

    @ApiProperty()
    @IsString()
    username : string

    @ApiProperty()
    @IsString()
    password : string

}

export class CreateUserDto extends OmitType(UserDto,['id']){}


