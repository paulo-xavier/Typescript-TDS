"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }
    setName(name) {
        this.name = name;
    }
    addTasks() {
        console.log("Adding tasks! ");
    }
    removeTasks() {
        console.log("Removing tasks");
    }
}
exports.user = user;
//# sourceMappingURL=User.js.map