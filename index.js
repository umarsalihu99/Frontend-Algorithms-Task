// 1. FAHRENHEIT TO CELSIUS CONVERTER

function convertFahrToCelsius(fahr) {

  if (Array.isArray(fahr)) {

    console.log(`[${fahr}] is not a valid number but an array`);
    return `[${fahr}] is not a valid number but an array`;
  }
  
  if (typeof fahr === "boolean") {

    console.log(`${fahr} is not a valid number but a ${typeof fahr}`);
    return `${fahr} is not a valid number but a ${typeof fahr}`;
  }
  
  else if (typeof fahr === "object") {

    console.log(`${JSON.stringify(fahr)} is not a valid number but an array`);
    return `${JSON.stringify(fahr)} is not a valid number but an array`;
  }

  let fahrTemp = Number(fahr);

  if (Number.isNaN(fahrTemp)) {

    console.log(`${fahr} is not a valid number but a/an ${typeof fahr}`);
    return `${fahr} is not a valid number but a/an ${typeof fahr}`;
  } 
  
  else {
    console.log(Number(((fahrTemp - 32) / 1.8).toFixed(4)));
    return Number(((fahrTemp - 32) / 1.8).toFixed(4));
  }
};

//You can use the following cases as guides:
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });




// 2. CHECK YuGioh

function checkYuGiOh(n) {
  let x = [];

  if (Array.isArray(n)) {
    console.log(`invalid parameter: [${n}]`);
    return `invalid parameter: [${n}]`;
  }
  
  else if (typeof n === "boolean") {
    console.log(`invalid parameter: ${n}`);
    return `invalid parameter: ${n}`;
  } 
  
  else if (isNaN(n) === true) {
    console.log(`invalid parameter: ${n}`);
    return `invalid parameter: ${n}`;
  } 
  
  else if (typeof n === "object") {
    console.log(`invalid parameter: ${JSON.stringify(n)}`);
    return `invalid parameter: ${JSON.stringify(n)}`;
  } 
  

  else {
    for (let i = 1; i <= n; i++) {

      if (i % 30 == 0) {
        x.push("yu-gi-oh");
      } 
      else if (i % 15 == 0) {
        x.push("gi-oh");
      } 
      else if (i % 10 == 0) {
        x.push("yu-oh");
      } 
      else if (i % 6 == 0) {
        x.push("yu-gi");
      } 
      else if (i % 5 == 0) {
        x.push("oh");
      } 
      else if (i % 3 == 0) {
        x.push("gi");
      } 
      else if (i % 2 == 0) {
        x.push("yu");
      } 
      else {
        x.push(i);
      }
    }
    console.log(x);
    return x;
  }
};

//Use the following cases as guides:
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");