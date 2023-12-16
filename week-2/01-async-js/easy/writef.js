const fs = require("fs");

fs.writeFile(
    "/Users/chinmaysmac/Desktop/100xDevCohort/assignments-masterw2/week-2/01-async-js/easy/data.txt",
    "Easy level questions done",
    "utf-8",
    (err,data) => {
        if(err) {
            console.error("Error writing the file");
            return;
        }
        else {
            console.log("file written sucessfully");
        }

    }
);

fs.readFile(
    "/Users/chinmaysmac/Desktop/100xDevCohort/assignments-masterw2/week-2/01-async-js/easy/data.txt"
    ,"utf-8",
    (err,data)=> {
        if(err){
            console.error("Error reading file", err);
            return;
        }
        else {
            console.log(data);
        }
    }
);
