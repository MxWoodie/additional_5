module.exports = function check(str, bracketsConfig) {
  
  let temp = str;

  // if (str.length % 2 !== 0) {
  //   return false;
  // }

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (temp[i] === bracketsConfig[j][0] && temp[i+1] === bracketsConfig[j][1]) {
        temp =  temp.slice(0, i) + temp.slice(i+2, temp.length);
        i = 0;
      }
    }
  }

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (temp[i] === bracketsConfig[j][0] && temp[i+1] === bracketsConfig[j][1]) {
        temp =  temp.slice(0, i) + temp.slice(i+2, temp.length);
        i = 0;
      }
    }
  }

  if (!temp.length) {
    return true;
  } else return false;
  
}
