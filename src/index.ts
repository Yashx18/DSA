// let stars = "";
// function pattern1(num: number): void {
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//       stars += "*" ;
//     }
//     console.log(stars + " ");
//     stars = "";
//     console.log("\n");
//   }
// }

// pattern1(5);

// let stars = "";
// function pattern2(num: number): void {
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += "*";
//     }
//     console.log(stars + " ");
//     stars = "";
//     console.log("\n");
//   }
// }

// pattern2(5);

// let stars = "";
// function pattern3(num: number): void {
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += j;
//     }
//     console.log(stars + " ");
//     stars = "";
//     console.log("\n");
//   }
// }

// pattern3(5);

// let stars = "";
// function pattern4(num: number): void {
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       stars += i;
//     }
//     console.log(stars + " ");
//     stars = "";
//     console.log("\n");
//   }
// }
// pattern4(5);

// let val = "";
// function pattern5(num: number): void {
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= (num-i+1); j++) {
//       val += j;
//     }
//     console.log(val + " ");
//     val = "";
//     console.log("\n");
//   }
// }
// pattern5(5);

// let val1 = "";
// function pattern6(num: number): void {
//   for (let i = 0; i < num; i++) {
//     //   space
//     for (let j = 0; j < num - i - 1; j++) {
//       val1 += " ";
//     }
//     //   star
//     for (let j = 0; j < 2 * i +  1; j++) {
//       val1 += "*";
//     }
//     //   space
//     for (let j = 0; j < num - i - 1; j++) {
//       val1 += " ";
//     }
//     console.log(val1);
//     val1 = "";
//     console.log("\n");
//   }
// }

// pattern6(5);

// let val = "";
// function pattern7(num: number): void {
//   for (let i = 0; i < num; i++) {
//     //   space
//     for (let j = 0; j < i; j++) {
//       val += " ";
//     }
//     //   star
//     for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
//       val += "*";
//     }
//     //   space
//     for (let j = 0; j < i; j++) {
//       val += " ";
//     }
//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }

// pattern7(5);

// let val = "";
// function pattern8(num: number): void {
//   for (let i = 0; i < 2*num; i++) {
//     //   space
//     let stars = i
//     if(stars > num) stars = 2*num - i
//     for (let j = 0; j < stars; j++) {
//       val += "*";
//     }
//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }
// pattern8(5)

// let val = "";
// let start;
// function pattern8(num: number): void {
//   for (let i = 0; i < num; i++) {
//     //   space
//     if (i % 2 == 0) {
//       start = 1;
//     } else {
//       start = 0;
//     }
//     for (let j = 0; j <= i; j++) {
//       val += start;
//       start = 1 - start;
//     }
//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }
// pattern8(5);

// let val = "";
// function pattern9(num: number): void {
//   for (let i = 1; i < num; i++) {
//     // number
//     for (let j = 1; j < i; j++) {
//       val += j ;
//     }
//     // space
//     for (let j = 1; j < 2 * num - (2 * i - 2); j++) {
//       val += " ";
//     }
//     // number
//     for (let j = i; j >= i; j--) {
//       val += j ;
//     }
//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }
// pattern9(5);

// let val1 = "";
// function pattern1(num: number) {
//   for (let i = 0; i < num; i++) {
//     // space
//     for (let j = 0; j < i; j++) {
//       val += "|";
//     }
//     // stars
//     for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
//       val += "*";
//     }
//     // space
//     for (let j = 0; j < i; j++) {
//       val += "|";
//     }

//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }

// pattern1(5);

// let res = "";
// let num = 4;
// for (let i = 1; i <= num; i++) {
//   for (let j = num; j >= i; j--) {
//     res += i;
//   }
//   console.log(res);
//   res = ""
//   console.log("\n");

// }

// let val = "";
// function pattern(num: number): void {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num - i; j++) {
//       val += "* ";
//     }

//     for (let j = 0; j < 2 * i; j++) {
//       val += "  ";
//     }

//     for (let j = 0; j < num - i; j++) {
//       val += "* ";
//     }

//     console.log(val);
//     val = "";
//   }
// }

// pattern(5);

// let val1 = "";
// function pattern1(num: number): void {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j <= i; j++) {
//       val1 += "* ";
//     }

//     for (let j = 0; j < 2* num - 2 * i - 2; j++) {
//       val1 += "  ";
//     }

//     for (let j = 0; j <= i; j++) {
//       val1 += "* ";
//     }

//     console.log(val1);
//     val1 = "";
//   }
// }

// pattern1(5);

// let val = "";
// function pattern(num: number): void {
//   let index;
//   let res = 2* num
//   let space;
//   for (let i = 1; i < res; i++) {
//     if (i <= res / 2) {
//       index = i;
//       space = res - 2 * i;
//     } else {
//       index = res - i;
//       space = 2 * i - res;
//     }
//     for (let j = 0; j < index; j++) {
//       val += "* ";
//     }

//     for (let j = 0; j < space; j++) {
//       val += "  ";
//     }

//     for (let j = 0; j < index; j++) {
//       val += "* ";
//     }

//     console.log(val);
//     val = "";
//   }
// }
// pattern(5);

// let val = "";
// function pattern(num: number): void {
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       if (i == 0 || i == num - 1 || j == 0 || j == num - 1) {
//         val += "* ";
//       } else {
//         val += "  ";
//       }
//     }

//     console.log(val);
//     val = "";
//   }
// }
// pattern(4);

// let val = "";
// function pattern(num: number): void {
//   for (let i = 0; i < num; i++) {
//     let res = 65;
//     // Star
//     for (let j = 0; j < num - i; j++) {
//       val += " ";
//     }
//     // Star
//     for (let j = 0; j < 2 * i + 1; j++) {
//       if (j < (2 * i) / 2) {
//         val += String.fromCharCode(res);
//         res++;
//       } else {
//         val += String.fromCharCode(res);
//         res--;
//       }
//     }
//     // Star
//     for (let j = 0; j < num - i; j++) {
//       val += " ";
//     }

//     console.log(val);
//     val = "";
//   }
// }
// pattern(4);

// let val = "";
// function pattern(num: number): void {
//   for (let i = 0; i <= num; i++) {
//     let res = 69;

//     // Star
//     for (let j = i; j >= 1; j--) {
//       val += String.fromCharCode(res-j+1);
//     }

//     console.log(val);
//     val = "";
//   }
// }
// pattern(5);

// let val = "";
// function pattern(num: number): void {
//   for (let i = 0; i < 2*num-1; i++) {

//     // Star
//     for (let j = 0; j < 2 * num - 1; j++) {
//       let top = i
//       let left = j
//       let down = 2 * num  -2- i;
//       let right = 2 * num -2 - j;
//       val += num - Math.min(top, down,left, right);
//     }

//     console.log(val);
//     val = "";
//   }
// }
// pattern(4);

//  lEARNING MATHS FOR DSA

function printNum(n: number) {
  let cnt = 0;
  let num = n;
  let amstrng = 0;
  let reversedNumber = 0;
  let list = "";

  while (num > 0) {
    let rem = num % 10;
    amstrng += rem ** 3;
    num = Math.floor(num / 10);
    reversedNumber = reversedNumber * 10 + rem;
    cnt++;
  }

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      list += ` ${i}`;
    }
  }

  console.log(typeof reversedNumber);
  console.log(`Original number : ${n}`);
  console.log(`Reversed number : ${reversedNumber}`);
  console.log(`Number of Digits is ${cnt}`);
  console.log(`Divisors of ${n} are${list}`);
  console.log(`Armstrong number result : ${amstrng}`);

  if (n === reversedNumber) {
    console.log(`${n} is a Palindrome Number`);
  } else {
    console.log(`${n} is not a Palindrome Number`);
  }

  if (n === amstrng) {
    console.log(`${n} is an Armstrong Number`);
  } else {
    console.log(`${n} is not an Armstrong Number`);
  }
}

function sortedDivisors(n: number) {
  let arr = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      arr.push(i);
      if (n / i !== i) {
        arr.push(n / i);
      }
    }
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
}

function primeCheck(n: number) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      cnt++;
      if (n / i != i) {
        cnt++;
      }
    }
  }
  console.log(cnt);

  if (cnt == 2) {
    console.log(`${n} is a Prime Number.`);
  } else {
    console.log(`${n} is not a  Prime Number.`);
  }
}

function gcd(n1: number, n2: number) {
  let num = 0;
  n1 > n2 ? (num = n1) : (num = n2);
  let GreatedCD;

  for (let i = 1; i <= num; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      GreatedCD = i;
    }
  }
  console.log(`Greatest Common Divisor of ${n1} & ${n2} is ${GreatedCD}`);
}

// function gcdByEA(n1: number, n2: number) {
//   let a;
//   let b;
//   while (n1 > 0 && n2 > 0) {
//     if (n1 > n2) {
//       a = n1 % n2;
//     } else {
//     }

//     if (a == 0) {
//       console.log(b);
//     } else {
//       console.log(b);
//     }
//   }
// }

function countDigits(n: number) {
  let num = n;
  let cnt = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    cnt++;
  }
  return cnt;
}

function reverseNumber(n: number) {
  let num = n;
  let val = 0;
  let lastDigit = 0;
  while (num > 0) {
    lastDigit = num % 10;
    num = Math.floor(num / 10);
    val = val * 10 + lastDigit;
  }
  return val;
}

function checkPalindrome(n: number) {
  let num = n;
  let val = 0;
  let lastDigit = 0;
  while (num > 0) {
    lastDigit = num % 10;
    num = Math.floor(num / 10);
    val = val * 10 + lastDigit;
  }

  if (n == val) {
    return `${n} is a Palindrome Number.`;
  } else {
    return `${n} is not a Palindrome Number.`;
  }
}

function checkArmstrong(n: number) {
  let num = n;
  let val = 0;
  let numLen = n.toString().length;
  let lastDigit = 0;

  while (num > 0) {
    lastDigit = num % 10;
    num = Math.floor(num / 10);
    val += lastDigit ** numLen;
  }

  if (n == val) {
    return `${n} is a Armstrong Number.`;
  } else {
    return `${n} is not a Armstrong Number.`;
  }
}
function checkGcd(n1: number, n2: number) {
  let num = 0;
  let GCD = 0;
  n1 > n2 ? (num = n1) : (num = n2);
  for (let i = 1; i <= num; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      GCD = i;
    }
  }
  return GCD;
}

//  RECURSION

function nameRecursion(i: number, n: number) {
  if (i > n) {
    return;
  } else {
    console.log("Ken");
    nameRecursion(i + 1, n);
  }
}
function linearRecursion(i: number, n: number) {
  if (i > n) {
    return;
  } else {
    console.log(i);
    linearRecursion(i + 1, n);
  }
}
function reverseRecursion(i: number, n: number) {
  if (n < i) {
    return;
  } else {
    console.log(n);
    reverseRecursion(i, n - 1);
  }
}
function backtrackingRecursion(i: number, n: number) {
  if (n < 1) {
    return;
  } else {
    backtrackingRecursion(i, n - 1);
    console.log(i - n + 1);
  }
}
// functional way
function sumRecursion(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRecursion(n - 1);
  }
}

// Parameterised way
function sumPrecursion(i: number, n: number) {
  if (i == 0) {
    console.log(n + i);
    return;
  } else {
    sumPrecursion(i - 1, n + i);
  }
}

// functional way for factor
function factorRecursion(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return n * factorRecursion(n - 1);
  }
}

// Paternised way for factor
function factorPRecursion(i: number, n: number) {
  if (i == n) {
    console.log(i * i);
    return;
  } else {
    factorPRecursion(i + 1, n);
  }
}

function reverseArray(n: number[], left: number, right: number) {
  if (left == right) {
    console.log(n);

    return;
  }
  [n[left], n[right]] = [n[right], n[left]];
  reverseArray(n, left + 1, right - 1);
}

function palindromeRecursion(n: string, i: number) {
 let str = n.toLowerCase()
  // @ts-ignore
  if (i == Math.floor(n.length / 2)) {
    return true;
  }
  if (str[i] != str[n.length - i -1]) {
    return false;
  }
  return palindromeRecursion(n, i + 1);
}

function main() {
  const res = palindromeRecursion("madAM", 0);
  console.log(res);
  // sumPrecursion(3,0)
}

main();
