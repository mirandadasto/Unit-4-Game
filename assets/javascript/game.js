var targetNumber = 0;
var wins = 0;
var losses = 0;

window.onload = function()
{
    createNewGame();
    displayTotalScore();
}

function generateRandomNumberForTargetNumber()
{
    return Math.ceil(Math.random() * 200);
}

function generateRandomNumberForCrystal()
{
    return Math.ceil(Math.random() * 50);
}

class Crystal{

    constructor(activations, image, label)
    {
        this.activations = activations;
        this.image = image;
        this.label = label;
        this.randomNumber = generateRandomNumberForCrystal();
    }
}

var crystals = [];

function generateCrystalValues()
{
        crystals = [ new Crystal(0, "#crystalOneImage", "#crystalOneLabel"),
        new Crystal(0, "#crystalTwoImage", "#crystalTwoLabel"),
        new Crystal(0, "#crystalThreeImage", "#crystalThreeLabel"),
        new Crystal(0, "#crystalFourImage", "#crystalFourLabel")];

        $("body").on("click", crystals[0].image, function()
        {
            $(crystals[0].label).text(crystals[0].randomNumber);
            crystals[0].activations++;
        })
        $("body").on("click", crystals[1].image, function()
        {
            $(crystals[1].label).text(crystals[1].randomNumber);
            crystals[1].activations++;
        })
        $("body").on("click", crystals[2].image, function()
        {
            $(crystals[2].label).text(crystals[2].randomNumber);
            crystals[2].activations++;
        })
        $("body").on("click", crystals[3].image, function()
        {
            $(crystals[3].label).text(crystals[3].randomNumber);
            crystals[3].activations++;
        })
}

function displayTotalScore()
{
    $("body").on("click", "img", function()
    {
        totalScore = 0;
        for(var i = 0; i < crystals.length; i++)
        {
            totalScore += (crystals[i].randomNumber * crystals[i].activations);
        }
        $(totalScoreLabel).text(totalScore);
        determineVictoryStatus();
    })
}

function determineVictoryStatus()
{
    if(totalScore > targetNumber)
    {
        alert("You are a disappointment to all of the maternal figures in your life.")
        losses++
        $(lossesLabel).text(losses);
        createNewGame();
    }
    else if(totalScore == targetNumber)
    {
        alert("You have won against all odds. Congratulations, peasant.")
        wins++
        $(winsLabel).text(wins);
        createNewGame();
    }
}

function createNewGame()
{
    targetNumber = generateRandomNumberForTargetNumber();
    $("#randomlyGeneratedNumber").text(targetNumber);

    generateCrystalValues();
    $(crystals[0].label).text("");
    $(crystals[1].label).text("");
    $(crystals[2].label).text("");
    $(crystals[3].label).text("");
    


    totalScore = 0;
    $(totalScoreLabel).text(totalScore);
}
