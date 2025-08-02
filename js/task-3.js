function getElementWidth(content, padding, border) {
  const contentSize = Number.parseInt(content);
  const paddingSize = Number.parseInt(padding);
  const borderSize = Number.parseInt(border);

  return contentSize + paddingSize + borderSize;
}
