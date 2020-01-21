var randomlyGeneratedNumber = 0;
var wins = 0;
var losses = 0;
var yourTotalScore = 0;

window.onload = function()
{
    $("#randomlyGeneratedNumber").text(generateRandomNumber());
    this.generateCrystalValues();
}

function generateRandomNumber()
{
    return Math.ceil(Math.random() * 100);
}

class Crystal{

    constructor(activated, image, label)
    {
        this.activated = activated;
        this.image = image;
        this.label = label;
    }
}

var crystals = [ new Crystal(false, "#crystalOneImage", "#crystalOneLabel"),
        new Crystal(false, "#crystalTwoImage", "#crystalTwoLabel"),
        new Crystal(false, "#crystalThreeImage", "#crystalThreeLabel"),
        new Crystal(false, "#crystalFourImage", "#crystalFourLabel")]

function generateCrystalValues()
{
        $("body").on("click", crystals[0].image, function()
        {
            if (crystals[0].activated == false)
            {
                $(crystals[0].label).text(generateRandomNumber());
                crystals[0].activated = true;
            }
        })

        $("body").on("click", crystals[1].image, function()
        {
            if (crystals[1].activated == false)
            {
                $(crystals[1].label).text(generateRandomNumber());
                crystals[1].activated = true;
            }
        })

        $("body").on("click", crystals[2].image, function()
        {
            if (crystals[2].activated == false)
            {
                $(crystals[2].label).text(generateRandomNumber());
                crystals[2].activated = true;
            }
        })

        $("body").on("click", crystals[3].image, function()
        {
            if (crystals[3].activated == false)
            {
                $(crystals[3].label).text(generateRandomNumber());
                crystals[3].activated = true;
            }
        })
}