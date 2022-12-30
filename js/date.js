const footerDate = document.querySelector('#footer-date')
const date = new Date()
const year = date.getFullYear()

footerDate.textContent = `${year} Fast AF, Inc.`;
