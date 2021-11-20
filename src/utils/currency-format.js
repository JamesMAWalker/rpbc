// Takes a number and formats it into VND
export const numToVnd = (num) =>
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(num)

export const numToVndNoSymb = (num) =>
  new Intl.NumberFormat('vi-VN', {
    currency: 'VND',
  }).format(num)
