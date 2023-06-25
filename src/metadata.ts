/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./cats/dto/create-cat.dto"), { "CreateCatDto": { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, breed: { required: true, type: () => String }, nickname: { required: true, type: () => String } } }], [import("./cats/entities/cat.entity"), { "Cat": { name: { required: true, type: () => String }, age: { required: true, type: () => Number }, breed: { required: true, type: () => String } } }]], "controllers": [[import("./cats/cat.controller"), { "CatsController": { "create": {}, "findAll": { type: [Object] }, "findOne": { type: [Object] } } }]] } };
};