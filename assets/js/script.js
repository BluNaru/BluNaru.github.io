document.getElementById("pyro-characters").classList.add("hidden");
document.getElementById("hydro-characters").classList.add("hidden");
document.getElementById("anemo-characters").classList.add("hidden");
document.getElementById("electro-characters").classList.add("hidden");
document.getElementById("dendro-characters").classList.add("hidden");
document.getElementById("cryo-characters").classList.add("hidden");
document.getElementById("geo-characters").classList.add("hidden");

document.getElementById("bg-box").classList.add("hidden");
document.getElementById("diluc-info").classList.add("hidden");
document.getElementById("tartaglia-info").classList.add("hidden");
document.getElementById("jean-info").classList.add("hidden");
document.getElementById("keqing-info").classList.add("hidden");
document.getElementById("kaeya-info").classList.add("hidden");
document.getElementById("zhongli-info").classList.add("hidden");
let activeID = null;
let activeCharaID = null;

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

function toggleInfoHidden(charaID) {
    document.getElementById("bg-box").classList.toggle("hidden");
    document.getElementById(charaID).classList.toggle("hidden");
    activeCharaID = charaID;
}

function toggleDilucInfo() {
    if (activeCharaID != null && activeCharaID != "diluc-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("diluc-info");
    } else if (activeCharaID == "diluc-info") { 
        toggleInfoHidden("diluc-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("diluc-info"); 
    }
}

function toggleTartagliaInfo() {
    if (activeCharaID != null && activeCharaID != "tartaglia-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("tartaglia-info");
    } else if (activeCharaID == "tartaglia-info") { 
        toggleInfoHidden("tartaglia-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("tartaglia-info"); 
    }
}

function toggleJeanInfo() {
    if (activeCharaID != null && activeCharaID != "jean-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("jean-info");
    } else if (activeCharaID == "jean-info") { 
        toggleInfoHidden("jean-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("jean-info"); 
    }
}

function toggleKeqingInfo() {
    if (activeCharaID != null && activeCharaID != "keqing-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("keqing-info");
    } else if (activeCharaID == "keqing-info") { 
        toggleInfoHidden("keqing-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("keqing-info"); 
    }
}

function toggleKaeyaInfo() {
    if (activeCharaID != null && activeCharaID != "kaeya-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("kaeya-info");
    } else if (activeCharaID == "kaeya-info") { 
        toggleInfoHidden("kaeya-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("kaeya-info"); 
    }
}

function toggleZhongliInfo() {
    if (activeCharaID != null && activeCharaID != "zhongli-info") { 
        toggleInfoHidden(activeCharaID);
        toggleInfoHidden("zhongli-info");
    } else if (activeCharaID == "zhongli-info") { 
        toggleInfoHidden("zhongli-info");
        activeCharaID = null;
    } else {
        toggleInfoHidden("zhongli-info"); 
    }
}