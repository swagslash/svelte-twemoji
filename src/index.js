"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twemoji = void 0;
const twemoji_1 = require("twemoji");
const svelte_1 = require("svelte");
function twemoji(node, how = {}) {
    twemoji_1.parse(node, how);
    svelte_1.afterUpdate(() => {
        twemoji_1.parse(node, how);
    });
    return {
        update() {
            console.warn('Changing twemoji options after the action was mounted is not possible.');
        }
    };
}
exports.twemoji = twemoji;
