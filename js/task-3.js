function getElementWidth(content, padding, border) {
  const contentSize = Number.parseInt(content);
  const paddingSize = Number.parseInt(padding);
  const borderSize = Number.parseInt(border);

  return contentSize + paddingSize + borderSize;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
