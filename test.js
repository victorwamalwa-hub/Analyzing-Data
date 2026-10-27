const { combineUsers } = require("./index");
const r = combineUsers(["alice","bob"],["charlie"],["dave","eve"]);
console.log("users         :", r.users);
console.log("is object     :", r instanceof Object);
console.log("has merge_date:", Object.hasOwn(r,"merge_date"));
console.log("today match   :", r.merge_date.toDateString() === new Date().toDateString());
