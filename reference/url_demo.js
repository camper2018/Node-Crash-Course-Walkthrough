const { search } = require('../../node-practice-tania-ali/routes/wiki');

const url = require('url').URL;
const myUrl = new url('http://mywebsite.com:8000/hello.html?id=100&status=active');
// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain + port)
console.log(myUrl.host);
// Hostname only
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams)
// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`));
