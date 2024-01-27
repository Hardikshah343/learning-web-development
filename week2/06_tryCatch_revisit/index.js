function getLength(name) {
    return name.length;
}

// const ans = getLength("hardik");
// console.log(ans);

// const ans1 = getLength();

// we know the following is errornous, so we put it inside try catch
try {
    let a;
    console.log(getLength(a));
} catch(e) {
    console.log("Error happened", e);
}

console.log("Hi there!!");