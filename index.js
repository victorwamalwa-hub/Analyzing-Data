/**
 * Lab: Analyzing Data with Modules and Syntax (JS)
 *
 * combineUsers(...userArrays) → merges any number of username arrays
 * into one flat array and returns { users, merge_date }.
 */

function combineUsers(...userArrays) {
  // Spread operator merges all argument arrays into one flat array
  const users = [].concat(...userArrays);

  // Today's date captured at call time
  const merge_date = new Date();

  return {
    users,
    merge_date,
  };
}

// CommonJS export (use `export { combineUsers };` if lab uses ES modules)
module.exports = { combineUsers };