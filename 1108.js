
// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var address = "1.1.1.1"

var defangIPaddr = function(address) {
  let arr = address.split('');
  for(let i=0;i<arr.length;i++){
      if(arr[i]=='.'){
          arr[i]='[.]';
      }
  }
  return arr.join('')
};

console.log(defangIPaddr(address))