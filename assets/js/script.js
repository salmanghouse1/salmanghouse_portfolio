document.addEventListener("DOMContentLoaded", function() {

        var occupationsArray = ["Full Stack Developer "];
        var occupationId = document.getElementById('occupation');

        // When loaded 
        // Loop through occupationsArray and display one letter at a time to occupation id, when one occupation is displayed erase the first occupation and load the second occupation using array access

        // create function
        // var removeArrayDisplay = (arrayItem) => {

        //     let j = occupationsArray[arrayItem].length - 1;
        //     var removeText = setInterval(function() {


        //             let occupationsArrayString = occupationsArray[arrayItem]
        //             let occupationsTextContentRemove = occupationsArrayString.slice(0, -1);
        //             occupationId.textContent = occupationsTextContentRemove;


        //             j--

        //             if (j === 0) {

        //                 clearInterval(removeText);


        //             }



        //         },



        // 200);


        // }




        var occupationArrayDisplay = (arrayItem) => {

            let i = 0;
            var addText = setInterval(function() {

                    occupationId.textContent += occupationsArray[arrayItem].toString()[i];

                    i++

                    if (i === occupationsArray[arrayItem].length - 1) {

                        clearInterval(addText);


                    }
                },


                200);





        }
        occupationArrayDisplay(0);




        // remove text function comes after removes the string
    }






)

$(window).on("resize", function() {
        if ($(window).width() < 960) {
            alert("a")
        }
    })
    // code


// occupationArrayEachLetter1 = [];
// occup                    ationArrayEachLetter2 = [];


// v                    ar currentOccupationNumber = 0;

// let counter = 0;
// let x = 0;
// let occupationPosition = 0
//     // PSEUDO ComMents:
//     // add occupations in an array
//     // take the letters of occupation1 and put in an array
//     // take the new array and add it to text content
//     // add the cursor
//     //pop the string elments or slice it
//     //use functions

// var getLetters = function convertOccupationsArrayIntoOccupationArrayLetters(occupationsArray, newArrayForOccuppationLetter) {
//     console.log("get letters")
//     console.log(occupationPosition)
//     console.log(occupationsArray.length)
//     if (occupationPosition > occupationsArray.length - 1) {
//         return
//     }
//     for (i = 0; i < occupationsArray[occupationPosition].length; i++) {
//         newArrayForOccuppationLetter.push(occupationsArray[occupationPosition].toString()[i]);
//     }
//     console.log("pushed");
//     console.log(newArrayForOccuppationLetter);
//     console.log(occupationArrayEachLetter1)
//     updateOccupationVar(occupationArrayEachLetter1)
// };


// var updateOccupationVar = function updateOccupation(occupationsArrayEachLetter) {
//     counter = 0;
//     console.log(occupationArrayEachLetter1);

//     if (counter > occupationsArrayEachLetter.length) {
//         return
//     }
//     if (counter < occupationsArrayEachLetter.length) {
//         occupationIdTextContent = occupationId;
//         occupationIdTextContent.textContent = '';
//         var UpdateText = setInterval(function() {

//                 occupationIdTextContent.textContent += occupationsArrayEachLetter[counter];

//                 counter++;

//                 if (counter === occupationsArrayEachLetter.length) {

//                     clearInterval(UpdateText);
//                 }

//             },
//             200);



//     }
//     occupationPosition++
//     getLetters(occupationsArray, occupationArrayEachLetter1)



// }

// getLetters(occupationsArray, occupationArrayEachLetter1);




// // currentOccupationNumber = 1;
// // if (currentOccupationNumber === 1) {

// // getLetters(occupationsArray, occupationArrayEachLetter2, 1);
// // updateOccupationVar(occupationArrayEachLetter2);

// // }

// // getLetters(occupationsArray, occupationArrayEachLetter2, 1);
// // updateOccupation(occupationArrayEachLetter2)