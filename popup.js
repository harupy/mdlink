chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  const title = tabs[0].title;
  const url = tabs[0].url;
  const id = parseId(url);
  const mdLink = `[${title + id}](${url})`;
  copy2clipboard(mdLink);
});

function copy2clipboard(text) {
  const copyFrom = document.createElement('textarea');
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

function parseId(url) {
  const regexp = /.+#([^/]+)$/;
  const match = regexp.exec(url);
  return match ? ' : ' + match[1] : '';
}
