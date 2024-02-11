"use strict";
const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get();
