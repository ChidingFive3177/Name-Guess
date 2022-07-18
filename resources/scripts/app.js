

import Age from "./age.js";
import Gender from "./gender.js"
import Nationality from "./nationality.js";
import Flag from "./flag.js";

function getName(){
    console.log("samkeh");
}


Age("ahmad").then(data => console.log(data));


Gender("ahmad").then(data => console.log(data));


Nationality("ahmad").then(data => data.forEach(element => {

    Flag(element).then(data => console.log(data));

}));


// export default getName;