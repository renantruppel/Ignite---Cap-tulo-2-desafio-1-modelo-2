"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllUsersController = void 0;
var ListAllUsersController = /** @class */ (function () {
    function ListAllUsersController(listAllUsersUseCase) {
        this.listAllUsersUseCase = listAllUsersUseCase;
    }
    ListAllUsersController.prototype.handle = function (request, response) {
        var user_id = request.headers.user_id;
        try {
            var users = this.listAllUsersUseCase.execute({
                user_id: user_id.toString(),
            });
            return response.status(201).json(users);
        }
        catch (e) {
            return response.status(400).json({ error: e });
        }
    };
    return ListAllUsersController;
}());
exports.ListAllUsersController = ListAllUsersController;
