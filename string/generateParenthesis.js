function generateParenthesis(n) {
  const res = [];

  // analog of the call stack
  const stackWithData = [{ open: 0, close: 0, str: "" }];

  while (stackWithData.length) {
    let { open, close, str } = stackWithData.pop();

    if (str.length === n * 2) {
      res.push(str);
    }

    if (open > close) {
      stackWithData.push({ open, close: close + 1, str: str + ")" });
    }

    if (open < n) {
      stackWithData.push({ open: open + 1, close, str: str + "(" });
    }
  }

  return res;
}
