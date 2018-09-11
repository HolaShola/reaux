// Correct variable names consist only of English letters, 
// digits and underscores and they can't start with a digit.
// Check if the given string is a correct variable name.

// For name = "var_1__Int", the output should be variableName(name) = true;
// For name = "qq-q", the output should be variableName(name) = false;
// For name = "2w2", the output should be variableName(name) = false.

function variableName(name) {
    return !!(name.match(/^[a-zA-Z_]{1}[\w]*$/));
} 

console.log(variableName('var_1__Int') == true);
console.log(variableName('qq-q') == false);
console.log(variableName('2w2') == false);
console.log(variableName(' variable') == false);
console.log(variableName('va[riable0') == false);
console.log(variableName('variable0') == true);
console.log(variableName('a') == true);
console.log(variableName('_Aas_23') == true);
console.log(variableName('a a_2') == false);
console.log(variableName('0ss') == false);