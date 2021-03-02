var mySlideshowArray = new Array();

class Slideshow
{
    constructor(raid)
    {
        this.raid = raid;
    }

    toString()
    {
        return "raid: " + this.raid;    
    }

    get theRaid()
    {
        return this.raid;
    }

}

function initializeArray()
{
    var mySlideshow = new ViewFinder("Silvia, The Miqo'te Dancer");
    var mySlideshow1 = new ViewFinder("Silvia, The Miqo'te Dancer");
    myViewFinderArray.push(mySlideshow);
    myViewFinderArray.push(mySlideshow1);

}
function accessInformation()
{
  
    document.getElementById("raid").innerHTML = mySlideshow[2].toString();

}

let myHero = "src= images/SilviaDancespec.jpg"
let myRaid = "src= images/FirstRaid.png"