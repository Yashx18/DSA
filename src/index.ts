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

// let val = "";
// function pattern6(num: number): void {
//   for (let i = 0; i < num; i++) {
//     //   space
//     for (let j = 0; j < num - i - 1; j++) {
//       val += " ";
//     }
//     //   star
//     for (let j = 0; j < 2 * i +  1; j++) {
//       val += "*";
//     }
//     //   space
//     for (let j = 0; j < num - i - 1; j++) {
//       val += " ";
//     }
//     console.log(val);
//     val = "";
//     console.log("\n");
//   }
// }

// pattern6(5);

let val = "";
function pattern7(num: number): void {
  for (let i = 0; i < num; i++) {
    //   space
    for (let j = num; j < num - i - 1; j--) {
      val += " ";
    }
    //   star
    for (let j = num; j < num * 2 - 1; j--) {
      val += "*";
    }
    //   space
    for (let j = num; j < num - i - 1; j--) {
      val += " ";
    }
    console.log(val);
    val = "";
    console.log("\n");
  }
}

pattern7(5);
