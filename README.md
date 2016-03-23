# node-assign

![node version](http://img.shields.io/node/v/node-assign.svg)
[![npm version](https://badge.fury.io/js/node-assign.svg)](https://badge.fury.io/js/node-assign)
[![Build Status](https://travis-ci.org/torvalamo/node-assign.svg?branch=master)](https://travis-ci.org/torvalamo/node-assign)

Recursive Object.assign as a node module.

## Important version update 1.1

The current version of the function ALTERS the target object, similar to Object.assign. If you need the function to return a brand new object, use an empty object literal `{}` as the first argument.

## Usage

Install

    npm install node-assign

There are two functions included (in 1.1). The `assign` function (default) and the explicitly called `merge` function.

The only difference between the two is that `assign` will overwrite sub objects with supplied non-objects, whereas `merge` will preserve object depth in the target (or add to it). `merge` will **never** remove a target key hierarchy, whereas `assign` might drop entire sub objects if given non-object keys. See below for example.
    
#### Use `assign`

    const assign = require('node-assign')
    
    var objA = {foo: 1, bar: {a: 1, b: 2}, baz: {goo: 99}}
    var objB = {bar: {c: 3}, baz: 3}
    
    assign(objA, objB)
    
    console.log(objA)
    //-> {foo: 1, bar: {a: 1, b: 2, c: 3}, baz: 3}

#### Use `merge`

    const merge = require('node-assign').merge
    
    var objA = {foo: 1, bar: {a: 1, b: 2}, baz: {goo: 99}}
    var objB = {bar: {c: 3}, baz: 3}
    
    merge(objA, objB)
    
    console.log(objA)
    //-> {foo: 1, bar: {a: 1, b: 2, c: 3}, baz: {goo: 99}}

#### Globalize

You can also globalize it into `Object`, but I suggest you use a different name than `assign`, since the built-in function may be used in various libraries which require its specific functionality.

    Object.rassign = require('node-assign') // recursive assign
    Object.merge = Object.rassign.merge // deep merge

## Caveats

### Only objects

The original `Object.assign` can also accept primitives (which are then converted to objects). Our function does not accept primitives as arguments. It will throw a fit and report you to the authorities.
