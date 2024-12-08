let userNames=["Star", "Moon", "Galaxy"];
function signup(str){
    let filteredData = userNames.filter((el, i) => el==str);
    if(filteredData.length == 0){
        userNames.push(str);
        console.log("signup Sucessful....");
    }else {
        console.log("Already Registered....");
    }
}

signup("Star");