"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cookie_parser_1 = (0, tslib_1.__importDefault)(require("cookie-parser"));
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const http_status_codes_1 = require("http-status-codes");
const index_1 = (0, tslib_1.__importDefault)(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use('/api', index_1.default);
app.get('/', (req, res) => {
    res.send('hi mustachios!');
});
app.use((err, req, res, next) => {
    console.log(err.message, err);
    return res.status(http_status_codes_1.BAD_REQUEST).json({
        error: err.message,
    });
});
exports.default = app;
//# sourceMappingURL=server.js.map