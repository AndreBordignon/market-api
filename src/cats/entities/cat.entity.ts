import { ApiProperty } from '@nestjs/swagger';
import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Cat extends Model {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @Column
  @ApiProperty({ example: 1, description: 'The name of the Cat' })
  name: string;

  @Column
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @Column
  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @Column
  @ApiProperty({
    example: 'pedrinho matador',
    description: 'the nickname of the cat',
  })
  nickname: string;
}
