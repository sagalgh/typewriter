//Have our file print out these three words 4311o th3r3 w0r1d 
//three seconds after the file is run
const string= "4311o th3r3 w0r1d " 
const stringArray = string.split(" ");
for (let i=0; i < stringArray.length; i++){
    setTimeout(()=>{
  process.stdout.write(stringArray[i] + " ")
}, i * 1000)  
}


