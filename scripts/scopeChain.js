//lexically scoped:
// Global variables are defined throughout the program. 
//Local variables are defined throughout the function in which they are declared, and also within any functions nested within that function.

//if a variable is not found in the own scope (in the own variable/activation object), its lookup proceeds in the parent’s variable object, and so on.


//Regarding contexts, identifiers are: names of variables, function declarations, formal parameters, etc. When a function refers in its code the identifier which is not a local variable (or a local function or a formal parameter), such variable is called a free variable. And to search these free variables exactly a scope chain is used.

//In general case, a scope chain is a list of all those parent variable objects, plus (in the front of scope chain) the function’s own variable/activation object
//__parent__ - refer to next chain