import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class CatModel extends Model<CatModel> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  breed: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nickname: string;
}
