"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
var UsersRepository_1 = require("../../repositories/implementations/UsersRepository");
var CreateUserController_1 = require("./CreateUserController");
var CreateUserUseCase_1 = require("./CreateUserUseCase");
var usersRepository = UsersRepository_1.UsersRepository.getInstance();
var createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository);
var createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
