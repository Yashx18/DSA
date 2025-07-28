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

let val = "";
let res = 65
function pattern(num: number): void {
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      val += String.fromCharCode(res + i -1 );
    }

    console.log(val);
    val = "";
    console.log("\n");
  }
}

pattern(5);

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
