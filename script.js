const byteSize = (str) => {
  // write your code here
	if (str.length<1) {
		console.log(0);
	}else{
	console.log(str.length);
	}
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
