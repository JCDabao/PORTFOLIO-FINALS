const sleep = async(milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds);
    });
};

function mainMenuRemove(state)
{
    let helpBtn = document.getElementById("help");
    let settingsBtn = document.getElementById("settings");
    let startBtn = document.getElementById("start");

    let mask = document.getElementById("mask")
    let text = document.getElementById("text")
    let text2 = document.getElementById("text2")

    helpBtn.style.left = '-800px';
    settingsBtn.style.left = '-1000px';
    startBtn.style.left = '-800px';

    if(state == "help")
    {
        showHelp();
        mask.style.background = 'rgba(0,0,0,0.8)';
        mask.style.zIndex = '-1';
    }
    else if(state =="settings")
    {
        showSettings();
        mask.style.background = 'rgba(0,0,0,0.8)';
        mask.style.zIndex = '-1';
    }
    else if(state =="start")
    {
        const delayedText = async () => 
        {
            mask.style.background = 'rgba(0,0,0,1)';
            mask.style.zIndex = '5';

            text.style.color = 'rgba(255, 255, 255, 1)';
            text.style.zIndex = '6';
            await sleep(5000);
            text.style.color = 'rgba(255, 255, 255, 0)';
            text.style.zIndex = '6';
            await sleep(5000);
            text2.style.color = 'rgba(255, 255, 255, 1)';
            text2.style.zIndex = '6';
        }
        delayedText();
    }
}

function mainMenuReturn(state)
{
    let helpBtn = document.getElementById("help");
    let settingsBtn = document.getElementById("settings");
    let startBtn = document.getElementById("start");

    helpBtn.style.left = '-200px';
    settingsBtn.style.left = '-135px';
    startBtn.style.left = '-200px';

    helpBtn.style.removeProperty('left');
    settingsBtn.style.removeProperty('left');
    startBtn.style.removeProperty('left');

    if(state == "help")
    {
        hideHelp();
        mask.style.background = 'rgba(0,0,0,0)';
        mask.style.zIndex = '-5';
    }
    else if(state =="settings")
    {
        hideSettings();
        mask.style.background = 'rgba(0,0,0,0)';
        mask.style.zIndex = '-5';
    }
}

function showHelp()
{
    let helpMain = document.getElementById("helpMain");
    let returnBtn = document.getElementById("helpReturn");

    helpMain.style.left = '375px';
    returnBtn.style.left = '760px';
}

function hideHelp()
{
    let helpMain = document.getElementById("helpMain");
    let returnBtn = document.getElementById("helpReturn");

    helpMain.style.left = '-1500px';
    returnBtn.style.left = '-1000px';
}

function showSettings()
{
    let settingsMain = document.getElementById("settingsMain");
    let returnBtn = document.getElementById("settingsReturn");

    settingsMain.style.left = '375px';
    returnBtn.style.left = '720px';
}

function hideSettings()
{
    let settingsMain = document.getElementById("settingsMain");
    let returnBtn = document.getElementById("settingsReturn");

    settingsMain.style.left = '-1500px';
    returnBtn.style.left = '-1000px';
}