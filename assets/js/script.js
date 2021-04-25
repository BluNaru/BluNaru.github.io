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
let activeID = null;
let activeCharaID = null;
let curSlider = null;
let imageNum = 0;
let imageMax = 4;
let timeout = null;
let b1 = null;
let b2 = null;
let b3 = null;
let b4 = null;

function reload() {
    window.location.reload();
}

function toggleCharaHidden(elementID) {
    document.getElementById(elementID).classList.toggle("hidden");
    activeID = elementID;
}

function togglePyroHidden() {
    if (activeID != null && activeID != "pyro-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("pyro-characters");
    } else if (activeID == "pyro-characters") { //click same icon already active
        toggleCharaHidden("pyro-characters");
        activeID = null;
    } else {
        toggleCharaHidden("pyro-characters"); //none open
    }
}
document.getElementById("pyro").onclick = togglePyroHidden;

function toggleHydroHidden() {
    if (activeID != null && activeID != "hydro-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("hydro-characters");
    } else if (activeID == "hydro-characters") { //click same icon already active
        toggleCharaHidden("hydro-characters");
        activeID = null;
    } else {
        toggleCharaHidden("hydro-characters"); //none open
    }
}
document.getElementById("hydro").onclick = toggleHydroHidden;

function toggleAnemoHidden() {
    if (activeID != null && activeID != "anemo-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("anemo-characters");
    } else if (activeID == "anemo-characters") { //click same icon already active
        toggleCharaHidden("anemo-characters");
        activeID = null;
    } else {
        toggleCharaHidden("anemo-characters"); //none open
    }
}
document.getElementById("anemo").onclick = toggleAnemoHidden;

function toggleElectroHidden() {
    if (activeID != null && activeID != "electro-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("electro-characters");
    } else if (activeID == "electro-characters") { //click same icon already active
        toggleCharaHidden("electro-characters");
        activeID = null;
    } else {
        toggleCharaHidden("electro-characters"); //none open
    }
}
document.getElementById("electro").onclick = toggleElectroHidden;

function toggleDendroHidden() {
    if (activeID != null && activeID != "dendro-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("dendro-characters");
    } else if (activeID == "dendro-characters") { //click same icon already active
        toggleCharaHidden("dendro-characters");
        activeID = null;
    } else {
        toggleCharaHidden("dendro-characters"); //none open
    }
}
document.getElementById("dendro").onclick = toggleDendroHidden;

function toggleCryoHidden() {
    if (activeID != null && activeID != "cryo-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("cryo-characters");
    } else if (activeID == "cryo-characters") { //click same icon already active
        toggleCharaHidden("cryo-characters");
        activeID = null;
    } else {
        toggleCharaHidden("cryo-characters"); //none open
    }
}
document.getElementById("cryo").onclick = toggleCryoHidden;

function toggleGeoHidden() {
    if (activeID != null && activeID != "geo-characters") { //different icon is open, closes it
        toggleCharaHidden(activeID);
        toggleCharaHidden("geo-characters");
    } else if (activeID == "geo-characters") { //click same icon already active
        toggleCharaHidden("geo-characters");
        activeID = null;
    } else {
        toggleCharaHidden("geo-characters"); //none open
    }
}
document.getElementById("geo").onclick = toggleGeoHidden;

function toggleInfoHidden(charaID,sliderID) {
    document.getElementById(charaID).classList.toggle("hidden");
    activeCharaID = charaID;
    curSlider = sliderID;
}

function toggleDilucInfo() {
    if (activeCharaID != null && activeCharaID != "diluc-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("diluc-info","slider-images-diluc");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(0);
        showSlides();
    } else if (activeCharaID == "diluc-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("diluc-info", "slider-images-diluc");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("diluc-info","slider-images-diluc"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(0);
        showSlides();
    }
}

function toggleKleeInfo() {
    if (activeCharaID != null && activeCharaID != "klee-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("klee-info","slider-images-klee");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(1);
        showSlides();
    } else if (activeCharaID == "klee-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("klee-info", "slider-images-klee");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("klee-info","slider-images-klee"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(1);
        showSlides();
    }
}

function toggleTartagliaInfo() {
    if (activeCharaID != null && activeCharaID != "tartaglia-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("tartaglia-info","slider-images-tartaglia");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(2);
        showSlides();
    } else if (activeCharaID == "tartaglia-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("tartaglia-info","slider-images-tartaglia");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("tartaglia-info","slider-images-tartaglia"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(2);
        showSlides();
    }
}

function toggleXingqiuInfo() {
    if (activeCharaID != null && activeCharaID != "xingqiu-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("xingqiu-info","slider-images-xingqiu");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(3);
        showSlides();
    } else if (activeCharaID == "xingqiu-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("xingqiu-info","slider-images-xingqiu");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("xingqiu-info","slider-images-xingqiu"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(3);
        showSlides();
    }
}

function toggleJeanInfo() {
    if (activeCharaID != null && activeCharaID != "jean-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("jean-info","slider-images-jean");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(4);
        showSlides();
    } else if (activeCharaID == "jean-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("jean-info","slider-images-jean");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("jean-info","slider-images-jean"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(4);
        showSlides();
    }
}

function toggleXiaoInfo() {
    if (activeCharaID != null && activeCharaID != "xiao-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("xiao-info","slider-images-xiao");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(5);
        showSlides();
    } else if (activeCharaID == "xiao-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("xiao-info","slider-images-xiao");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("xiao-info","slider-images-xiao"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(5);
        showSlides();
    }
}

function toggleBeidouInfo() {
    if (activeCharaID != null && activeCharaID != "beidou-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("beidou-info","slider-images-beidou");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(6);
        showSlides();
    } else if (activeCharaID == "beidou-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("beidou-info","slider-images-beidou");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("beidou-info","slider-images-beidou"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(6);
        showSlides();
    }
}

function toggleKeqingInfo() {
    if (activeCharaID != null && activeCharaID != "keqing-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("keqing-info","slider-images-keqing");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(7);
        showSlides();
    } else if (activeCharaID == "keqing-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("keqing-info","slider-images-keqing");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("keqing-info","slider-images-keqing"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(7);
        showSlides();
    }
}

function toggleKaeyaInfo() {
    if (activeCharaID != null && activeCharaID != "kaeya-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("kaeya-info","slider-images-kaeya");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(8);
        showSlides();
    } else if (activeCharaID == "kaeya-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("kaeya-info","slider-images-kaeya");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("kaeya-info","slider-images-kaeya"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(8);
        showSlides();
    }
}

function toggleQiqiInfo() {
    if (activeCharaID != null && activeCharaID != "qiqi-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("qiqi-info","slider-images-qiqi");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(9);
        showSlides();
    } else if (activeCharaID == "qiqi-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("qiqi-info","slider-images-qiqi");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("qiqi-info","slider-images-qiqi"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(9);
        showSlides();
    }
}

function toggleAlbedoInfo() {
    if (activeCharaID != null && activeCharaID != "albedo-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("albedo-info","slider-images-albedo");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(10);
        showSlides();
    } else if (activeCharaID == "albedo-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("albedo-info","slider-images-albedo");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("albedo-info","slider-images-albedo"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(10);
        showSlides();
    }
}

function toggleZhongliInfo() {
    if (activeCharaID != null && activeCharaID != "zhongli-info") { 
        toggleInfoHidden(activeCharaID,curSlider);
        toggleInfoHidden("zhongli-info","slider-images-zhongli");
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(11);
        showSlides();
    } else if (activeCharaID == "zhongli-info") { 
        document.getElementById("logo").scrollIntoView({behavior:"smooth"});
        setTimeout(function() {
            toggleInfoHidden("zhongli-info","slider-images-zhongli");
            document.getElementById("bg-box").classList.add("hidden");
            activeCharaID = null;
            curSlider = null;
            clearTimeout(timeout);}, 350);
    } else {
        document.getElementById("bg-box").classList.remove("hidden");
        toggleInfoHidden("zhongli-info","slider-images-zhongli"); 
        document.getElementById("bg-box").scrollIntoView({behavior:"smooth"});
        imageNum = 0;
        buttonChange(11);
        showSlides();
    }
}

function buttonChange(charaCount) { //diluc=0,klee=1,childe=2,xingqiu=3,jean=4,xiao=5,beidou=6,keqing=7,kaeya=8,qiqi=9,albedo=10,zhongli=11
    b1 = document.querySelectorAll(".button1")[charaCount];
    b2 = document.querySelectorAll(".button2")[charaCount];
    b3 = document.querySelectorAll(".button3")[charaCount];
    b4 = document.querySelectorAll(".button4")[charaCount];
}

function convertVWtoPX(vw) {
	return vw * (document.documentElement.clientWidth / 100);
}

let sliderWidth = convertVWtoPX(50) + 8;

function clickImage1() {
    imageNum = 0;
    loadImage(curSlider);
}

function clickImage2() {
    imageNum = 1;
    loadImage(curSlider);
}

function clickImage3() {
    imageNum = 2;
    loadImage(curSlider);
}

function clickImage4() {
    imageNum = 3;
    loadImage(curSlider);
}

function clearDotColor() {
    b1.style.backgroundColor = "";
    b2.style.backgroundColor = "";
    b3.style.backgroundColor = "";
    b4.style.backgroundColor = "";
}

function loadImage(sliderID) {
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
	document.getElementById(sliderID).style.left = -pixels;
}

function showSlides() {
    loadImage(curSlider);
    if (imageNum == imageMax-1) {
        imageNum = 0;
    } else {
        imageNum += 1;
    }
    clearTimeout(timeout);
    timeout = setTimeout(showSlides, 3000);
}