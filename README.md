# node-assign

[![npm version](https://badge.fury.io/js/node-assign.svg)](https://badge.fury.io/js/node-assign)
[![Build Status](https://travis-ci.org/torvalamo/node-assign.svg?branch=master)](https://travis-ci.org/torvalamo/node-assign)

Recursive Object.assign as a node module

## Usage

Install

    npm install node-assign
    
Use

    var assign = require('node-assign')
    
    var objA = {foo: 1, bar: 99}
    var objB = {bar: 2, baz: 3}
    
    var objC = assign(objA, objB)
    console.log(objC)
    // {foo: 1, bar: 2, baz: 3}

You can also globalize it into `Object`, but I suggest you use a different name than `assign`, since the built-in function may be used in various libraries which require its specific functionality.

    Object.merge = require('node-assign')

## Caveats

### Only objects

The function does not alter the supplied target object. The initial target is always an empty `{}`, and all arguments are merged into it. As a result of that, you can supply any `instanceof Object` as a valid argument. 

This differs from the original `Object.assign`, which could also accept primitives (which were then converted to objects). This function does not accept primitives as arguments. It will ignore them.

### Merge

Technically this function would better be called merge, since it doesn't overwrite entire sub objects when clashing (which `Object.assign` does), but rather merges them. There are other modules for this as well, but some overdo it. This one is aimed at being extremely small and strict.
