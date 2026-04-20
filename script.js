const byteSize = (str) => {
  // write your code here
	str = new Blob([str]);
	return str.size;
	
};

// Do not change the code below

const str = prompt("Enter some string.");
alert(byteSize(str));

