document.getElementById("pyro-characters").classList.add("hidden");
document.getElementById("hydro-characters").classList.add("hidden");
document.getElementById("anemo-characters").classList.add("hidden");
document.getElementById("electro-characters").classList.add("hidden");
document.getElementById("dendro-characters").classList.add("hidden");
document.getElementById("cryo-characters").classList.add("hidden");
document.getElementById("geo-characters").classList.add("hidden");

document.getElementById("bg-box").classList.add("hidden");
document.getElementById("diluc-info").classList.add("hidden");
document.getElementById("klee-info").classList.add("hidden");
document.getElementById("tartaglia-info").classList.add("hidden");
document.getElementById("xingqiu-info").classList.add("hidden");
document.getElementById("jean-info").classList.add("hidden");
document.getElementById("xiao-info").classList.add("hidden");
document.getElementById("beidou-info").classList.add("hidden");
document.getElementById("keqing-info").classList.add("hidden");
document.getElementById("kaeya-info").classList.add("hidden");
document.getElementById("qiqi-info").classList.add("hidden");
document.getElementById("albedo-info").classList.add("hidden");
document.getElementById("zhongli-info").classList.add("hidden");
let activeE = -1; //pyro=0,hydro=1,anemo=2,electro=3,dendro=4,cryo=5,geo=6
let activeCharaID = -1; //diluc=0,klee=1,childe=2,xingqiu=3,jean=4,xiao=5,beidou=6,keqing=7,kaeya=8,qiqi=9,albedo=10,zhongli=11
let imageNum = 0;
let imageMax = 4;
let timeout = null;
let b1 = null;
let b2 = null;
let b3 = null;
let b4 = null;
let sliderWidth = convertVWtoPX(50) + 8;

function reload() {
    window.location.reload();
}

function toggleCharaHidden(elementID) {
    document.getElementsByClassName("characters")[elementID].classList.toggle("hidden");
    activeE = elementID;
}

function toggleElementHidden(elem) {
    if (activeE != -1 && activeE != elem) { //different icon is open, closes it
        toggleCharaHidden(activeE);
        toggleCharaHidden(elem);
    } else if (activeE == elem) { //click same icon already active
        toggleCharaHidden(elem);
        activeE = -1;
    } else {
        toggleCharaHidden(elem); //none open
    }
}

function togglePyroHidden() {
    toggleElementHidden(0);
}
document.getElementById("pyro").onclick = togglePyroHidden;

function toggleHydroHidden() {
    toggleElementHidden(1);
}
document.getElementById("hydro").onclick = toggleHydroHidden;

function toggleAnemoHidden() {
    toggleElementHidden(2);
}
document.getElementById("anemo").onclick = toggleAnemoHidden;

function toggleElectroHidden() {
    toggleElementHidden(3);
}
document.getElementById("electro").onclick = toggleElectroHidden;

function toggleDendroHidden() {
    toggleElementHidden(4);
}
document.getElementById("dendro").onclick = toggleDendroHidden;

function toggleCryoHidden() {
    toggleElementHidden(5);
}
document.getElementById("cryo").onclick = toggleCryoHidden;

function toggleGeoHidden() {
    toggleElementHidden(6);
}
document.getElementById("geo").onclick = toggleGeoHidden;

function toggleInfoHidden(charaID) {
    document.getElementsByClassName("info")[charaID].classList.toggle("hidden");
    activeCharaID = charaID;
}

function toggleCharaInfo(charaNum) {
    if (activeCharaID != -1 && activeCharaID != charaNum) { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden(charaNum);
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(charaNum);
        showSlides();
    } else if (activeCharaID == charaNum) { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden(charaNum);
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden(charaNum); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(charaNum);
        showSlides();
    }
}

function toggleDilucInfo() {
    toggleCharaInfo(0);
}

function toggleKleeInfo() {
    toggleCharaInfo(1);
}

function toggleTartagliaInfo() {
    toggleCharaInfo(2);
}

function toggleXingqiuInfo() {
    toggleCharaInfo(3);
}

function toggleJeanInfo() {
    toggleCharaInfo(4);
}

function toggleXiaoInfo() {
    toggleCharaInfo(5);
}

function toggleBeidouInfo() {
    toggleCharaInfo(6);
}

function toggleKeqingInfo() {
    toggleCharaInfo(7);
}

function toggleKaeyaInfo() {
    toggleCharaInfo(8);
}

function toggleQiqiInfo() {
    toggleCharaInfo(9);
}

function toggleAlbedoInfo() {
    toggleCharaInfo(10);
}

function toggleZhongliInfo() {
    toggleCharaInfo(11);
}

function buttonChange(charaCount) {
    b1 = document.querySelectorAll(".button1")[charaCount];
    b2 = document.querySelectorAll(".button2")[charaCount];
    b3 = document.querySelectorAll(".button3")[charaCount];
    b4 = document.querySelectorAll(".button4")[charaCount];
}

function convertVWtoPX(vw) {
	return vw * (document.documentElement.clientWidth / 100);
}



function clickImage1() {
    imageNum = 0;
    loadImage(activeCharaID);
}

function clickImage2() {
    imageNum = 1;
    loadImage(activeCharaID);
}

function clickImage3() {
    imageNum = 2;
    loadImage(activeCharaID);
}

function clickImage4() {
    imageNum = 3;
    loadImage(activeCharaID);
}

function clearDotColor() {
    b1.style.backgroundColor = "";
    b2.style.backgroundColor = "";
    b3.style.backgroundColor = "";
    b4.style.backgroundColor = "";
}

function loadImage(charaID) {
    clearDotColor();
    if (imageNum == 0) {
        b1.style.backgroundColor = "white";
    } else if (imageNum == 1) {
        b2.style.backgroundColor = "white";
    } else if (imageNum == 2) {
        b3.style.backgroundColor = "white";
    } else if (imageNum == 3) {
        b4.style.backgroundColor = "white";
    }
    sliderWidth = convertVWtoPX(50) + 8;
    pixels = sliderWidth * imageNum;
	document.getElementsByClassName("slider")[charaID].style.left = -pixels;
}

function showSlides() {
    loadImage(activeCharaID);
    if (imageNum == imageMax-1) {
        imageNum = 0;
    } else {
        imageNum += 1;
    }
    clearTimeout(timeout);
    timeout = setTimeout(showSlides, 3000);
}