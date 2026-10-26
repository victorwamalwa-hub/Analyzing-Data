const { combineUsers } = require("./index");

const result = combineUsers(["alice", "bob"], ["charlie"], ["dave", "eve"]);

console.log("users        :", result.users);
console.log("is object    :", result instanceof Object);
console.log("has users    :", Object.hasOwn(result, "users"));
console.log("has merge_date:", Object.hasOwn(result, "merge_date"));
console.log("merge_date   :", result.merge_date);
console.log(
  "today match  :",
  result.merge_date.toDateString() === new Date().toDateString()
);

users        : [ 'alice', 'bob', 'charlie', 'dave', 'eve' ]
is object    : true
has users    : true
has merge_date: true
merge_date   : 2026-10-26T...
today match  : true