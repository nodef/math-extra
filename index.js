/**
 * Gives sum of numbers (Σ).
 * @param {...number} n a list of numbers
 */
function sum(...n) {
  var a = 0;
  for(var i=0, I=n.length; i<I; i++)
    a += n[i];
  return a;
}
/**
 * Gives product of numbers (∏).
 * @param {...number} n a list of numbers
 */
function product(...n) {
  var a = 1;
  for(var i=0, I=n.length; i<I; i++)
    a *= n[i];
  return a;
}
function gcdPair(x, y) {
  while(y!==0) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

/**
 * Gives greatest common divisor of numbers.
 * @param  {...number} n a list of numbers
 */
function gcd(...n) {
  var a = n[0]||1;
  for(var i=1, I=n.length; i<I; i++)
    a = gcdPair(a, n[i]);
  return a;
}
/**
 * Gives least common multiple of numbers.
 * @param {...number} n a list of numbers
 */
function lcm(...n) {
  return product(...n)/gcd(...n);
}
/**
 * Gives ways to choose k elements from a set of n elements.
 * @param {number} n elements in source set
 * @param {number} k elements in choose set
 */
function binomial(n, k) {
  // generalization to negative integers
  if(k<0 || k>Math.abs(n)) return 0;
  if(n<0) return Math.pow(-1, k)*binomial(-n, k);
  // take advantage of symmetry
  k = k>n-k? n-k:k;
  for(var a=1, i=1; i<=k; i++, n--)
    a *= n/i;
  return a;
}
/**
 * Gives ways to put n objects in m bins (n=sum(ki)).
 * @param {...number} k objects per bin (ki)
 */
function multinomial(...k) {
  var n = sum(...k), a = 1;
  for(var i=0, j=0, I=k.length; i<I;) {
    if(j<=0) j = k[i++];
    else a *= n--/j--;
  }
  return a;
}
const A1 =  0.254829592;
const A2 = -0.284496736;
const A3 =  1.421413741;
const A4 = -1.453152027;
const A5 =  1.061405429;
const P  =  0.3275911;

/**
 * Gives error function value of number (approximation).
 * @param {number} n a number
 */
function erf(n) {
  var sgn = n<0? -1:1;
  var n = Math.abs(n);
  var t = 1/(1+ P*n);
  var y = 1-(((((A5*t+A4)*t)+A3)*t+A2)*t+A1)*t*Math.exp(-n*n);
  return sgn*y;
}
exports.sum = sum;
exports.product = product;
exports.gcd = gcd;
exports.lcm = lcm;
exports.binomial = binomial;
exports.multinomial = multinomial;
exports.erf = erf;
