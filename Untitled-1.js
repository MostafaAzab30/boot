






const kill = document.getElementById("kill")
const smaler = document.querySelectorAll(".smaler")







    smaler.forEach((eo) => {
    
        eo.addEventListener("click" , () => {

            dis1.style['opacity'] = '1';

        
    })

});


dis1.addEventListener("click" , () => {


    dis2.style['opacity'] = '1';

})

dis2.addEventListener("click" , () => {


    dis3.style['opacity'] = '1';

})

dis3.addEventListener("click" , () => {


    dis4.style['opacity'] = '1';

})




$( function() {
    $( ".draggable" ).draggable();
    } );




































