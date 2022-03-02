"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = (0, tslib_1.__importDefault)(require("./server"));
const port = Number(process.env.PORT || 3000);
server_1.default.listen(port, () => {
    console.log('Express server started on port: ' + port);
});
//# sourceMappingURL=app.js.map