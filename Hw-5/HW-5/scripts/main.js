//create an array of image names that correspond to the image tags

var imageTags = ["pic1", "pic2","pic3", "pic4"];



// create a variable with the blank image name

var blankImagePath = "images/rollforini.png";

// create a blank array for the actual images

var actualImages = new Array();

function printBlanks()
{
// call out random image creation function

createRandomImageArray();

// create a 'for' type loop
    {
    for(var i = 0; i < imageTags.length; i++)

    // iterate (Move) through the image tag ids and sets the source
    document.getElementById(imageTags[i]).src= blankImagePath;
    }

}

function createRandomImageArray()

{
     // creates an array of actual images
     
     var actualImagePath = [ "images/d20.jpg", "images/d5.jpg"];
     
     // create a second array to make sure the images only get added twice to the other array
     
     var count = [0,0];

     //  create a while statement to check if the actual image array is full or not

     while(actualImages.length < 4)

     {
            // get a random number between 0 and the total number of images we can choose from

                var randomNumber = Math.floor(Math.random() * actualImagePath.length)
            
              // create an 'if' statement that says the total number is less than 2, then
              // add the image to the actual image array

                if(count[randomNumber] < 2);
            {

                actualImages.push(actualImagePath[randomNumber]);
              
              // then add one to the array that makes sure that ONLY two images can be added 

               count[randomNumber] = count[randomNumber] + 1;
            }

     }


}

    function flipImage(number)
    {
        document.getElementById(imageTags[number]).src = actualImages[number];
        // this function should be simple and quick, and is intended to just change the image based on what number was/is pressed!

    }