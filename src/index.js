module.exports = function check(str, bracketsConfig) {

  if (str.length % 2) return false;

  const findCloseingInd = v => {
    for (let i = 0; i < bracketsConfig.length; i++) 
      if (bracketsConfig[i][1] == v) return i;
    return -1;
  }

  const st = [];
  for (const v of str) {
    const closeingInd = findCloseingInd(v);
    
    if (closeingInd == -1) st.push(v);  // opening bracket
    else if (bracketsConfig[closeingInd][0] == bracketsConfig[closeingInd][1]) { // special case ||
      if (st.length && st[st.length - 1] == v) st.pop();
      else st.push(v);
    }
    else if (!st.length ||st.pop() != bracketsConfig[closeingInd][0]) return false;
  }

  return st.length == 0;
}
