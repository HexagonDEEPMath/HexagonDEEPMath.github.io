let appPageIndex = 1; 
const appPage = document.getElementsByClassName('app-page');
const gameButton = document.getElementById('game-button');
const goBack = document.getElementById('go-back');
const stage = document.getElementById('Stage');

appPage[appPageIndex-1].style.display ="block";

gameButton.addEventListener('click' ,function()
{
    appPage[appPageIndex-1].style.display ="none";
    appPageIndex = 2; 
    appPage[appPageIndex-1].style.display ="block";
});

goBack.addEventListener('click' ,function()
{
    appPage[appPageIndex-1].style.display ="none"; 
    appPageIndex = appPageIndex-1; 
    appPage[appPageIndex-1].style.display ="block";
});

stage.addEventListener('click' ,function()
{
    appPage[appPageIndex-1].style.display ="none";
    appPageIndex = 3; 
    appPage[appPageIndex-1].style.display ="block";
});