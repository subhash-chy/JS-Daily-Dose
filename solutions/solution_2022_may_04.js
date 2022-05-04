// Question 1
const extractHalf = (a) => {
  if (typeof a == "string") {
    const x = a.substring(0, a.length / 2);
    return x;
  }
  return "Please enter string!";
};

const r = extractHalf("abcdef");
console.log(r);

// Question 2
const boolReturner = (a, b) => {
  // a= {a: 1, b:2}
  // a= {}, b= ""
  if (b in a) {
    return true;
  }
  return false;
};

const rs = boolReturner({ a: 1, b: 2 }, "a");
const rs2 = boolReturner({ a: 1, b: 2 }, "c");
console.log(rs, rs2);
