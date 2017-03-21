/* @flow */

// function foo(x: ?number): string {
// Hello world, Did you catch the type checking error in this line. Right?
// Please fix it, if you want to use this bare repository.
function foo(x: ?string): string {
  if (x) {
    return x;
  }
  return "default string";
}
