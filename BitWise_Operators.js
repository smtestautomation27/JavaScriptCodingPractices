/* Bitwise Operators
These work on 32-bit numbers at the binary level (0s and 1s). 
While rare in everyday web dev, they are vital for high-performance graphics or cryptography.

& (AND): Sets each bit to 1 if both bits are 1.

| (OR): Sets each bit to 1 if one of two bits is 1.

^ (XOR): Sets each bit to 1 if only one of two bits is 1.

~ (NOT): Inverts all the bits.

<< / >>: Left/Right Shift bits. */
let a = 2, b = 3;

// &

console.log(a & b);

// |

console.log(a | b);

// ^

console.log(a ^ b);

// ~

console.log(~ b);

// <<

console.log(a << 2)

// >>

console.log(b >> 2)