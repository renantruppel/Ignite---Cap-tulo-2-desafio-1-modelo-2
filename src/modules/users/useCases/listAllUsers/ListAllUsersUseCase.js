"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersUseCase = void 0;
var ListAllUsersUseCase = /** @class */ (function () {
    function ListAllUsersUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    ListAllUsersUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var users = this.usersRepository.list(user_id);
        if (!users) {
            throw new Error("Usuário não é admin");
        }
        return users;
    };
    return ListAllUsersUseCase;
}());
exports.ListAllUsersUseCase = ListAllUsersUseCase;
