function getElementWidth(content, padding, border) {
  const contentSize = Number.parseFloat(content);
  const paddingSize = Number.parseFloat(padding);
  const borderSize = Number.parseFloat(border);

  return contentSize + 2 * paddingSize + 2 * borderSize;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
