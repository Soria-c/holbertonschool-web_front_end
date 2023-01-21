"use strict";

let globalVariable = "Welcome";

function outer(){
    alert(globalVariable);
    let course = "Holberton";

    function inner(){
        alert(`${globalVariable} ${course}`);
        let exclamantion = "!";
        function inception(){
            alert(`${globalVariable} ${course}${exclamantion}`)
        }
        inception();
    }
    inner();
}
outer();
