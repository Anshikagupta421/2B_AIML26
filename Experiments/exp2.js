const fs = require("fs");

fs.writeFile("student.txt", "Anshika", (err) => {
    if (err) 
        throw err;
    console.log("File Created");
fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) 
            throw err;
        console.log("Read:", data);
fs.appendFile("student.txt", "\nCSE AIML", (err) => {
        if (err) 
            throw err;
        console.log("Updated");
fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) 
            throw err;
        console.log(data);
fs.unlink("student.txt", (err) => {
        if (err)
            throw err;
        console.log("File Deleted");
          });
      });
    });
  });
});