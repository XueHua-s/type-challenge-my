type IF<C extends boolean, T, F> = C extends true ? T : F
type A = IF<true, 'a', 'b'>; // expected to be 'a'
type B = IF<false, 'a', 'b'>; // expected to be 'b'
export {}
