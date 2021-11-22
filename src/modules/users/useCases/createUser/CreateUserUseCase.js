"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
var CreateUserUseCase = /** @class */ (function () {
    function CreateUserUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    CreateUserUseCase.prototype.execute = function (_a) {
        var email = _a.email, name = _a.name;
        var user = this.usersRepository.create({
            name: name,
            email: email,
        });
        if (!user) {
            throw new Error("email já está cadastrado");
        }
        return user;
    };
    return CreateUserUseCase;
}());
exports.CreateUserUseCase = CreateUserUseCase;
