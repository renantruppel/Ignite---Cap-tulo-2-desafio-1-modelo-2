"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
var User_1 = require("../../model/User");
var UsersRepository = /** @class */ (function () {
    function UsersRepository() {
        this.users = [];
    }
    UsersRepository.getInstance = function () {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    };
    UsersRepository.prototype.create = function (_a) {
        var name = _a.name, email = _a.email;
        var hasEmailCreated = this.users.some(function (user) { return user.email === email; });
        if (hasEmailCreated) {
            return null;
        }
        var user = new User_1.User(name, email);
        this.users.push(user);
        return user;
    };
    UsersRepository.prototype.findById = function (id) {
        var user = this.users.find(function (user) { return user.id === id; });
        return user;
    };
    UsersRepository.prototype.findByEmail = function (email) {
        var user = this.users.find(function (user) { return user.email === email; });
        return user;
    };
    UsersRepository.prototype.turnAdmin = function (receivedUser) {
        var user = this.findById(receivedUser);
        if (user) {
            user.admin = true;
            return user;
        }
        return null;
    };
    UsersRepository.prototype.list = function (userId) {
        var user = this.findById(userId);
        if (user && user.admin === true) {
            return this.users;
        }
        return null;
    };
    return UsersRepository;
}());
exports.UsersRepository = UsersRepository;
