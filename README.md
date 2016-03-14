# node-assign
Recursive Object.assign as a node module

## Caveats

The function does not alter the supplied target object. The initial target is always an empty `{}`, and all arguments are merged into it. As a result of that, you can supply any `instanceof Object` as a valid argument. 

This differs from the original `Object.assign`, which could also accept primitives (which were then converted to objects). This function does not accept primitives as arguments. It will ignore them.
