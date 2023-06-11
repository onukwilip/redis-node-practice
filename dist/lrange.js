"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const redis_1 = require("redis");
(0, dotenv_1.config)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, redis_1.createClient)();
    client.on("error", (e) => {
        console.log("An error occured", e);
    });
    client.connect();
    const res = process.env.KEY1 && (yield client.lRange(process.env.KEY1, 0, 10));
    const res2 = process.env.KEY2 && (yield client.lRange(process.env.KEY2, 0, -1));
    console.log("LRANGE", "RESULT", res);
    console.log("LRANGE", "RESULT", res2);
    client.disconnect();
}))();
