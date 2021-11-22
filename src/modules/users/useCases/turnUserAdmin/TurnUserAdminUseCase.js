"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnUserAdminUseCase = void 0;
var TurnUserAdminUseCase = /** @class */ (function () {
    function TurnUserAdminUseCase(usersRepository) {
        this.usersRepository = usersRepository;
    }
    TurnUserAdminUseCase.prototype.execute = function (_a) {
        var user_id = _a.user_id;
        var user = this.usersRepository.turnAdmin(user_id);
        if (!user) {
            throw new Error("usuário não existe");
        }
        return user;
    };
    return TurnUserAdminUseCase;
}());
exports.TurnUserAdminUseCase = TurnUserAdminUseCase;
