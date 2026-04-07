function calculate() {
    // 1. You MUST wrap these in Number() 
    // This converts "100" (text) into 100 (number)
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);
    let d = Number(document.getElementById("n4").value);
    let e = Number(document.getElementById("n5").value);

    let max;

    // 2. Now the "Greater Than" (>=) works for math!
    if (a >= b && a >= c && a >= d && a >= e) {
        max = a;
    } 
    else if (b >= c && b >= d && b >= e) {
        max = b;
    } 
    else if (c >= d && c >= e) {
        max = c;
    } 
    else if (d >= e) {
        max = d;
    } 
    else {
        max = e;
    }

    // 3. Display the result
    document.getElementById("result").innerHTML = "The largest is: " + max;
}