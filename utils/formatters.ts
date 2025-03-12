export const formatLargeNumber = function (val: number | null | string): string {
  if (val == null) {
    return '';
  }
  if (typeof val === 'string') {
    return parseFloat(val).toLocaleString('en-US');
  }
  return val.toLocaleString('en-US');
};

export const addUSD = function (v: string | number | null) {
  if (v == null || v === '') {
    return '';
  }
  return `$${v}`;
};

export const numberToMoney = function (num: string | number | null, decimals: number = 2) {
  if (num == null) {
    return num;
  }
  if (typeof num === 'string') {
    num = parseFloat(num);
  }
  return num.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
};

export const formatPercent = function (v: string | number | null) {
  if (v == null || v === '') {
    return '';
  }
  return `${v}%`;
};
