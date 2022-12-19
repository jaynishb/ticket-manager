"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
if (!module.hot) {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
}
dotenv.config({
    path: `.${process.env.NODE_ENV}.env`,
});
for (const envName of Object.keys(process.env)) {
    process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
}
module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['src/modules/**/*.entity{.ts,.js}'],
    migrations: ['migrations/*{.ts,.js}'],
};
//# sourceMappingURL=ormconfig.js.map