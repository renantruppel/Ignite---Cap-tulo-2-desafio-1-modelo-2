"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
var CreateUserController = /** @class */ (function () {
    function CreateUserController(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    CreateUserController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, email = _a.email;
        try {
            var user = this.createUserUseCase.execute({
                email: email,
                name: name,
            });
            return response.status(201).json({
                name: user.name,
                email: user.email,
                admin: user.admin,
            });
        }
        catch (e) {
            return response.status(400).json({ error: e });
        }
    };
    return CreateUserController;
}());
exports.CreateUserController = CreateUserController;
