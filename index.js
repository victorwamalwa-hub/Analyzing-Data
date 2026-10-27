function combineUsers(...userArrays) {
  const users = [].concat(...userArrays);
  const merge_date = new Date();
  return { users, merge_date };
}
module.exports = { combineUsers };
