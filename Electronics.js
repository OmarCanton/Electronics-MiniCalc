//Developer: Abdulai Umar Tijani (3360522)
//Tel: 05536342775 / 0248782542

var FirstScreen = document.getElementById("FirstScreen");
var info = document.getElementById("info");
var about = document.getElementById("about");
var calcContainer = document.getElementById("calcContainer");
var closeAbout = document.getElementById("closeAbout");
var calcContainerDivs = document.querySelectorAll(".calcContainer div");
var carrierConc = document.querySelectorAll(".calcContainer div") [0];
var barrierVoltage = document.querySelectorAll(".calcContainer div") [1];
var realDiodeAnalysis = document.querySelectorAll(".calcContainer div") [2];
var idealDiodeAnalysis = document.querySelectorAll(".calcContainer div") [3];
var slides = document.querySelectorAll(".calcContainer div") [4];
var books = document.querySelectorAll(".calcContainer div") [5];
var carrierConcentrationScreen = document.getElementById("carrierConcentrationScreen");
var carrierConcentrationScreenDivs = document.querySelectorAll("carrierConcentrationScreen div");
var calcContainerH3 = document.querySelector(".calcContainer h3");
var butIcons = document.getElementById("butIcons");
var intrinsicSemiconductor = document.getElementById("intrinsicSemiconductor");
var extrinsicSemiconductor = document.getElementById("extrinsicSemiconductor");
var calcSpace = document.getElementById("calcSpace");
var calcSpaceDivs = document.querySelectorAll(".calcSpace div");
var outputSpace = document.getElementById("outputSpace");
var back1 = document.getElementById("back1");
var calcName = document.getElementById("calcName");
var addName = document.getElementById("addName");
var calculate = document.getElementById("calculate");
var tempInput = document.getElementById("tempInput");
var resultDisplay = document.getElementById("resultDisplay");
var resultDisplayAddInfo = document.getElementById("resultDisplayAddInfo");
var back2 = document.getElementById("back2");
var extrinsicTypes = document.getElementById("extrinsicTypes");
var P_type = document.getElementById("P_type");
var N_type = document.getElementById("N_type");
var pOrNHoleAndElectConc = document.getElementById("pOrNHoleAndElectConc");
var pOrNHoleAndElectConc2 = document.getElementById("pOrNHoleAndElectConc2");
var holeConc = document.getElementById("holeConc")
var holeConc2 = document.getElementById("holeConc2")
var electConc = document.getElementById("electConc")
var electConc2 = document.getElementById("electConc2")
var acceptAtomsInput = document.getElementById("acceptAtomsInput");
var donorAtomsInput = document.getElementById("donorAtomsInput");
var VsInput = document.getElementById("VsInput");
var V1Input = document.getElementById("V1Input");
var RInput = document.getElementById("RInput");
var I1Input = document.getElementById("I1Input");
var nInput = document.getElementById("nInput");
var decChangeInput = document.getElementById("decChangeInput");
var VdoInput = document.getElementById("VdoInput");
var rdInput = document.getElementById("rdInput");
var VdInput = document.getElementById("VdInput");
var IsInput = document.getElementById("IsInput");
var slides_books = document.getElementById("slides_books");
var back3 = document.getElementById("back3");
info.addEventListener("click", () => {
    about.classList.add("aboutDisplayJS");
    FirstScreen.classList.add("firstScreenOffJS");
});
closeAbout.addEventListener("click", () => {
    about.classList.remove("aboutDisplayJS");
    FirstScreen.classList.remove("firstScreenOffJS");
});
function screensOff () {
    carrierConc.classList.add("firstScreenOffJS");
    barrierVoltage.classList.add("firstScreenOffJS");
    idealDiodeAnalysis.classList.add("firstScreenOffJS");
    realDiodeAnalysis.classList.add("firstScreenOffJS");
    slides.classList.add("firstScreenOffJS");
    books.classList.add("firstScreenOffJS");    
    calcContainerH3.classList.add("firstScreenOffJS");    
    butIcons.classList.add("firstScreenOffJS");   
}
function screensOn () {
    carrierConc.classList.remove("firstScreenOffJS");
    barrierVoltage.classList.remove("firstScreenOffJS");
    idealDiodeAnalysis.classList.remove("firstScreenOffJS");
    realDiodeAnalysis.classList.remove("firstScreenOffJS");
    slides.classList.remove("firstScreenOffJS");
    books.classList.remove("firstScreenOffJS");    
    calcContainerH3.classList.remove("firstScreenOffJS");    
    butIcons.classList.remove("firstScreenOffJS");
}
function receiveValsInSciNots (InputValue) {
    InputValue = String(InputValue);
    let parts = [];
    parts = String(InputValue).split("x");
    let actNum = parseFloat(parts[0]);
    let power = parseInt(parts[1].substring(parts[1].indexOf("^") + 1));
    return actNum * Math.pow(parseInt(parts[1].substring(parts[1].indexOf("^") - 2 + parts[1].substring(parts[1].indexOf("^") - 1))), power);
}
function SciDisplayFormat (Answer) {
    let answerArray = [];
    answerArray = String(Answer).split("e");
    let fNum = answerArray[0];
    fNum = Number(fNum).toExponential(2);
    let splitE = String(fNum).split("e");
    let base = splitE[0];
    let power = Math.floor(Math.log10(Answer));
    if (power === 0) {
        return base;
    } else {
        return base + "x10^" + power;
    }
}
function IntrinsicConcCalc (T) {
    const Eg = 1.12, B = 7.3 * Math.pow(10, 15), K = 8.62 * Math.pow(10, -5);
    let ni = B * Math.pow(T, 1.5) * Math.exp(-Eg / (2 * K * T));
    return ni;
}
function sciNot2 (ans) {
    let answer = Number(ans).toExponential(2);
    let parts = [];
    parts = String(answer).split("e");
    let base = parts[0];
    let power = Math.floor(Math.log10(answer));
    return base * Math.pow(10, power);
}
function ThermalVoltage (T) {
    const K = 8.62 * Math.pow(10, -5);
    const q = 1;
    return (K * T ) / q; 
}
let back2Click = 0;
carrierConc.addEventListener("click", () => {
    back2Click = 0;
    carrierConcentrationScreen.classList.add("showCarrierConcScreen");
    screensOff();
    calcContainer.style.height = "40vh";
    back1.style.opacity = 1;
    back1.style.pointerEvents = "all";
    if (window.matchMedia("(max-width: 425px)")) {
        back1.style.transform = "translateY(23vh)";
    } else {
        back1.style.transform = "translateY(25vh)";
    }
    iterativeDiv.style.display = "none";
    piecewiseDiv.style.display = "none";
    shockelyDiv.style.display = "none";
    intrinsicSemiconductor.style.display = "flex";
    extrinsicSemiconductor.style.display = "flex";
});
let iterativeDiv = document.createElement("div");
let piecewiseDiv = document.createElement("div");
let shockelyDiv = document.createElement("div");
iterativeDiv.setAttribute("id", "iterativeAnalysis");
piecewiseDiv.setAttribute("id", "piecewiseAnalysis");
shockelyDiv.setAttribute("id", "ShockelyDiodeEqn");
iterativeDiv.innerHTML = "Iterative Analysis";
piecewiseDiv.innerHTML = "PieceWise-Linear Analysis";
shockelyDiv.innerHTML = "Shockely Diode Equation Analysis";
carrierConcentrationScreen.appendChild(iterativeDiv);
carrierConcentrationScreen.appendChild(piecewiseDiv);
carrierConcentrationScreen.appendChild(shockelyDiv);

realDiodeAnalysis.addEventListener("click", () => {
    iterativeDiv.style.display = "flex";
    piecewiseDiv.style.display = "flex";
    shockelyDiv.style.display = "flex";
    iterativeDiv.style.transform= "translateY(-50%)";
    piecewiseDiv.style.transform= "translateY(-50%)";
    shockelyDiv.style.transform= "translateY(-50%)";
    intrinsicSemiconductor.style.display = "none";  
    extrinsicSemiconductor.style.display = "none";  
    carrierConcentrationScreen.classList.add("showCarrierConcScreen");
    back2Click = 0;
    screensOff();
    calcContainer.style.height = "40vh";
    back1.style.opacity = 1;
    back1.style.pointerEvents = "all";
    if (window.matchMedia("(max-width: 425px)")) {
        back1.style.transform = "translateY(20vh)";
    } else {
        back1.style.transform = "translateY(25vh)";
    }
});
calcName.style.textAlign = "center";
addName.style.textAlign = "center";
idealDiodeAnalysis.addEventListener("click", () => {
    intrinsicCalcClick = 10;
    back2Click = 1;
    screensOff();
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "Ideal Diode Analysis";
    addName.innerHTML = "Constant-Voltage-Drop Model";
    calcName.style.transform = "translateY(-10vh)";
    addName.style.transform = "translateY(-10vh)";
    calcSpaceDivs.forEach((div) => {
        if (div.id === "Vs" || div.id === "Vd" || div.id === "R" || div.id === "calculate") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
let doc1 = document.querySelectorAll("#slides_books div") [0];
let doc2 = document.querySelectorAll("#slides_books div") [1];
let doc3 = document.querySelectorAll("#slides_books div") [2];
let doc4 = document.querySelectorAll("#slides_books div") [3];
slides.addEventListener("click", () => {
    screensOff();
    back2Click = 0;
    calcContainer.style.height = "40vh";
    back1.style.opacity = 1;
    back1.style.pointerEvents = "all";
    if (window.matchMedia("(max-width: 425px)")) {
        back1.style.transform = "translateY(23vh)";
    } else {
        back1.style.transform = "translateY(25vh)";
    }
    slides_books.classList.add("showCarrierConcScreen");
    doc1.style.display = "flex";
    if (window.matchMedia("(max-width: 425px)")) {   
        doc1.style.paddingLeft = "5px";
        doc1.style.paddingRight = "5px";
    }
    doc2.style.display = "flex";
    doc3.style.display = "none";
    doc4.style.display = "none";
});
books.addEventListener("click", () => {
    screensOff();
    calcContainer.style.height = "40vh";
    back1.style.opacity = 1;
    back1.style.pointerEvents = "all";
    if (window.matchMedia("(max-width: 425px)")) {
        back1.style.transform = "translateY(19vh)";
    } else {
        back1.style.transform = "translateY(25vh)";
    }
    slides_books.classList.add("showCarrierConcScreen");
    back2Click = 0;
    doc1.style.display = "none";
    doc2.style.display = "none";
    doc3.style.display = "flex";
    doc4.style.display = "flex";
    doc3.style.transform = "translateY(-30%)";
    doc4.style.transform = "translateY(-30%)";
    if (window.matchMedia("(max-width: 425px)")) {
        doc3.style.width = "80%";
        doc4.style.width = "80%";
    }
});
doc1.addEventListener("click", () => {
    window.location.href = "Slides/Basic semiconductor theory2024.pdf";
});
doc2.addEventListener("click", () => {
    window.location.href = "Slides/Diodes and applications2024.pdf";
});
doc3.addEventListener("click", () => {
    window.location.href = "Books/Bird - Electrical circuit theory and technology, 5e.pdf";
});
doc4.addEventListener("click", () => {
    window.location.href = "Books/Electronics Fundamentals Circuits Devices and Applications 8th Edition By David M Buchla and Thomas L Floyd.pdf";
});

let intrinsicCalcClick = 0;
intrinsicSemiconductor.addEventListener("click", () => {
    intrinsicCalcClick = 1;
    back2Click = 2;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = intrinsicSemiconductor.innerHTML;
    addName.innerHTML = "Carrier Concentration Calculation";
    calcName.style.transform = "translateY(-20vh)";
    addName.style.transform = "translateY(-20vh)";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if(div.id === "temp"){
            div.style.display = "flex";
        } else if (div.id === "calculate") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
function emptyInputs () {
    resultDisplay.innerHTML = "One or more input fields empty, enter a value!";
    resultDisplayAddInfo.innerHTML = "";
}
if (window.innerWidth <= 614) {
    calcSpace.classList.add("calcSpaceJS");
    outputSpace.classList.add("outputSpaceJS");
} else {
    calcSpace.classList.remove("calcSpaceJS");
    outputSpace.classList.remove("outputSpaceJS");
}
function clickEvent_enterEvent () {
    outputSpace.classList.add("outputSpaceShowJS");
    if (window.innerWidth <= 614) {
        calcSpace.style.transform = "translateX(-60%)";
        calcSpace.style.opacity = 0;
        calcSpace.style.pointerEvents = "none";
        outputSpace.style.borderLeft = "none";
        outputSpace.style.borderTopLeftRadius = "5px";
        outputSpace.style.borderBottomLeftRadius = "5px";
    } else {
        calcSpace.style.transform = "translateX(-50%)";
        calcSpace.style.opacity = 1;
        calcSpace.style.pointerEvents = "all";
        outputSpace.style.borderLeft = "1px solid darkgrey";
        outputSpace.style.borderTopLeftRadius = 0;
        outputSpace.style.borderBottomLeftRadius = 0;
    }
    if (intrinsicCalcClick === 1){
        try {
            if (tempInput.value === ""){
                emptyInputs();
            } else if (isNaN(tempInput.value)) {
                resultDisplay.innerHTML = "Invalid Temperature Input! Enter a Number!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                resultDisplay.innerHTML = "The Carrier Concentration  is " + SciDisplayFormat(IntrinsicConcCalc(tempInput.value)) + " cm^-3";
                resultDisplayAddInfo.innerHTML = "Note: The Hole and Electron Concentrations are equal";
            }
        } catch (e) {
            resultDisplay.innerHTML = "ERR_OCCURED!";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 2) {
        try {
            if (acceptAtomsInput.value === "") {
                emptyInputs();
            } else {
                resultDisplay.innerHTML = "The Hole Concentration is " + SciDisplayFormat(receiveValsInSciNots(acceptAtomsInput.value)) + " cm^-3";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "The Hole Concentration is " + SciDisplayFormat(acceptAtomsInput.value) + " cm^-3";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 3) {
        try {
            if (tempInput.value === "" || acceptAtomsInput.value === ""){
                emptyInputs();
            } else if (isNaN(tempInput.value)) {
                resultDisplay.innerHTML = "Invalid Temperature Input! Enter a Number!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                resultDisplay.innerHTML = "The Electron Concentration is " + SciDisplayFormat(Math.pow(IntrinsicConcCalc(tempInput.value), 2) / receiveValsInSciNots(acceptAtomsInput.value)) + " cm^-3";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "The Hole Concentration is " +  SciDisplayFormat(Math.pow(IntrinsicConcCalc(tempInput.value), 2) / sciNot2(acceptAtomsInput.value)) + " cm^-3";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 4) {
        try {
            if (tempInput.value === "" || donorAtomsInput.value === ""){
                emptyInputs();
            } else if (isNaN(tempInput.value)) {
                resultDisplay.innerHTML = "Invalid Temperature Input! Enter a Number!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                resultDisplay.innerHTML = "The Hole Concentration is " + SciDisplayFormat(Math.pow(IntrinsicConcCalc(tempInput.value), 2) / receiveValsInSciNots(donorAtomsInput.value)) + " cm^-3";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "The Hole Concentration is " +  SciDisplayFormat(Math.pow(IntrinsicConcCalc(tempInput.value), 2) / sciNot2(donorAtomsInput.value)) + " cm^-3";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 5) {
        try {
            if (donorAtomsInput.value === "") {
                emptyInputs();
            } else {
                resultDisplay.innerHTML = "The Electron Concentration is " + SciDisplayFormat(receiveValsInSciNots(donorAtomsInput.value)) + " cm^-3";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "The Electron Concentration is " + SciDisplayFormat(donorAtomsInput.value) + " cm^-3";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 6) {
        try {
            if (tempInput.value === "" || acceptAtomsInput.value === "" || donorAtomsInput.value === "") {
                emptyInputs();
            } else if (isNaN(tempInput.value)) {
                resultDisplay.innerHTML = "Invalid Temperature Input! Enter a Number!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                resultDisplay.innerHTML = "The Barrier Voltage of the Space Charge region is " + (ThermalVoltage(tempInput.value) * Math.log((receiveValsInSciNots(acceptAtomsInput.value) * receiveValsInSciNots(donorAtomsInput.value)) / Math.pow(IntrinsicConcCalc(tempInput.value), 2))).toFixed(3) + " V";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch(e) {
            resultDisplay.innerHTML = "The Barrier Voltage of the Space Charge region is " + (ThermalVoltage(tempInput.value) * Math.log((sciNot2(acceptAtomsInput.value) * sciNot2(donorAtomsInput.value)) / Math.pow(IntrinsicConcCalc(tempInput.value), 2))).toFixed(3) + " V";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 7) {
        try {
            if (VsInput.value === "" || V1Input.value === "" || RInput.value === "" || I1Input.value === "" || V1Input.value === "") {
                emptyInputs();
            } else if(isNaN(VsInput.value) ||  isNaN(V1Input.value) || isNaN(RInput.value)) {
                resultDisplay.innerHTML = "Invalid Inputs Given, Re-enter!";
                resultDisplayAddInfo.innerHTML = "";
            } else if (decChangeInput.value === "" && tempInput.value === "" && nInput.value === "") {
                resultDisplay.innerHTML = "Must enter a value for either the voltage drop in every Decade change or Temperature and Co-efficient of Emission!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                let V2 = 0, I2 = 0;
                let V1 = parseFloat(V1Input.value);
                let I1 = parseFloat(I1Input.value);
                let decChange = parseFloat(decChangeInput.value);
                let Vs = parseFloat(VsInput.value);
                let R = parseFloat(RInput.value);
                let T = parseFloat(tempInput.value);
                let n = parseFloat(nInput.value);
                I2 = parseFloat((Vs - V1) / R).toFixed(3);
                if (isNaN(decChange)){
                    V2 =  parseFloat(V1 + 2.3 * n * ThermalVoltage(T).toFixed(3) * Math.log10(I2 / I1)).toFixed(3); 
                } else {
                    V2 =  parseFloat(V1 + decChange * Math.log10(I2 / I1)).toFixed(3);
                }
                while (Math.abs(V2 - V1) > 0.01 && Math.abs(I2 - I1) > 0.01) {
                    I1 = parseFloat(I2);
                    V1 = parseFloat(V2);

                    I2 = parseFloat((Vs - V1) / R).toFixed(3);
                    if (isNaN(decChange)){
                        V2 = parseFloat(V1 + 2.3 * n * ThermalVoltage(T).toFixed(3) * Math.log10(I2 / I1)).toFixed(3); 
                    } else {
                        V2 =  parseFloat(V1 + decChange * Math.log10(I2 / I1)).toFixed(3);
                    }
                }
                resultDisplay.innerHTML = "The Diode Voltage is " + parseFloat(V2) + " V and the Diode Current is " + parseFloat(I2) + " mA";
                resultDisplayAddInfo.innerHTML = "**Note: The Results above is obtained after a Number of Iterations."
            }
        } catch (e1) {
           resultDisplay.innerHTML = "ERR_OCCURED!"; 
           resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 8) {
        try {
            if (VsInput.value === "" || VdoInput.value === "" || RInput.value === "" || rdInput.value === "") {
                emptyInputs();
            } else if (isNaN(VsInput.value) || isNaN(VdoInput.value) || isNaN(RInput.value) || isNaN(rdInput.value)) {
                resultDisplay.innerHTML = "ERROR, Enter Values!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                let Vs = parseFloat(VsInput.value);
                let Vdo = parseFloat(VdoInput.value);
                let R = parseFloat(RInput.value);
                let rd = parseFloat(rdInput.value);
                let ID = parseFloat((Vs - Vdo) / (R + rd));
                let VD = parseFloat(Vdo  + (ID * rd));
                resultDisplay.innerHTML = "The Diode Voltage is " + VD.toFixed(4) + " V and the Diode Current is " + ID.toFixed(4) + " mA";
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "ERR__OCCURED!";
            resultDisplayAddInfo.innerHTML = "";
        }
    } else if (intrinsicCalcClick === 9) {
        try {
            if (tempInput.value === "" || VdInput.value === "" || IsInput.value === "" || nInput.value === "") {
                emptyInputs();
            } else if (isNaN(tempInput.value) || isNaN(VdInput.value) || isNaN(nInput.value)) {
                resultDisplay.innerHTML = "Invalid Input enteries, Kindly Enter values!";
                resultDisplayAddInfo.innerHTML = "";
            } else {
                let Is = parseFloat(receiveValsInSciNots(IsInput.value));
                let Vd = parseFloat(VdInput.value);
                let VT = parseFloat(ThermalVoltage(parseFloat(tempInput.value)));
                let n = parseFloat(nInput.value);
                let Id = parseFloat(Is * (Math.exp(Vd / (n * VT).toFixed(3)) - 1));
                resultDisplay.innerHTML = "The Diode Current is " + SciDisplayFormat(Id) + " A";  
                resultDisplayAddInfo.innerHTML = "";
            }
        } catch (e) {
            resultDisplay.innerHTML = "One or more input values are invalid!";      
            resultDisplayAddInfo.innerHTML = "";
        }
    } else {
        try {
            if (VsInput.value === "" || RInput.value === "") {
                emptyInputs();
            } else if (isNaN(VsInput.value) || isNaN(RInput.value)) {
                resultDisplay.innerHTML = "Invalid Input enteries, Kindly Enter values!";    
                resultDisplayAddInfo.innerHTML = "";
            } else {
                let Vs = parseFloat(VsInput.value);
                let R = parseFloat(RInput.value);
                const Vd = 0.7;
                let Id = parseFloat((Vs - Vd) / R).toFixed(3);
                resultDisplay.innerHTML = "The Diode Current is " + Id + " mA";
                resultDisplayAddInfo.innerHTML = "*Note: This was based on a constant voltage drop of 0.7V";
            }
        } catch (e) {
            resultDisplay.innerHTML = "ERR_OCCURED!";
            resultDisplayAddInfo.innerHTML = "";
        }
    }
}
calcSpace.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        clickEvent_enterEvent();
    }
});
calculate.addEventListener("click", () => {
    clickEvent_enterEvent();
});
extrinsicSemiconductor.addEventListener("mouseover", () => {
    extrinsicTypes.classList.add("showExtrinsicTypesJS");
});
extrinsicSemiconductor.addEventListener("mouseleave", () => {
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
});
P_type.addEventListener("mouseover", () => {
    pOrNHoleAndElectConc.classList.add("showExtrinsicTypesJS");
});
P_type.addEventListener("mouseleave", () => {
    pOrNHoleAndElectConc.classList.remove("showExtrinsicTypesJS");
});
N_type.addEventListener("mouseover", () => {
    pOrNHoleAndElectConc2.classList.add("showExtrinsicTypesJS");
});
N_type.addEventListener("mouseleave", () => {
    pOrNHoleAndElectConc2.classList.remove("showExtrinsicTypesJS");
});
barrierVoltage.addEventListener("click", () => {
    intrinsicCalcClick = 6;
    back2Click = 1;
    screensOff();
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "Barrier Voltage Of The Space Charge Region";
    addName.innerHTML = "Barrier Voltage Calculation";
    calcName.style.transform = "translateY(-10vh)";
    addName.style.transform = "translateY(-10vh)";
    calcSpaceDivs.forEach((div) => {
        if (div.id === "temp" || div.id === "acceptAtoms" || div.id === "donorAtoms" || div.id === "calculate") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });    
});
holeConc.addEventListener("click", () => {
    back2Click = 2;
    intrinsicCalcClick = 2;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "P-Type Semi-Conductor";
    addName.innerHTML = "Hole Concentration Calculation";
    calcName.style.transform = "translateY(-20vh)";
    addName.style.transform = "translateY(-20vh)";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if(div.id === "acceptAtoms") {
            div.style.display = "flex";
        } else if(div.id === "calculate"){
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
holeConc2.addEventListener("click", () => {
    intrinsicCalcClick = 4;
    back2Click = 2;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "N-Type Semi-Conductor";
    addName.innerHTML = "Hole Concentration Calculation";
    calcName.style.transform = "translateY(-20vh)";
    addName.style.transform = "translateY(-20vh)";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if(div.id === "temp" || div.id === "donorAtoms") {
            div.style.display = "flex";
        } else if(div.id === "calculate"){
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
})
electConc.addEventListener("click", () => {
    intrinsicCalcClick = 3;
    back2Click = 2;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "P-Type Semi-Conductor";
    addName.innerHTML = "Electron Concentration Calculation";
    calcName.style.transform = "translateY(-20vh)";
    addName.style.transform = "translateY(-20vh)";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if(div.id === "acceptAtoms" || div.id === "temp") {
            div.style.display = "flex";
        } else if(div.id === "calculate"){
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
electConc2.addEventListener("click", () => {
    intrinsicCalcClick = 5;
    back2Click = 2;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcName.innerHTML = "N-Type Semi-Conductor";
    addName.innerHTML = "Electron Concentration Calculation";
    calcName.style.transform = "translateY(-20vh)";
    addName.style.transform = "translateY(-20vh)";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if(div.id === "donorAtoms") {
            div.style.display = "flex";
        } else if(div.id === "calculate"){
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
iterativeDiv.addEventListener("click", () => {
    back2Click = 2;
    if (window.matchMedia("(max-width: 425px)")) {
        back2.style.top = "8%";
    }
    intrinsicCalcClick = 7;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcSpace.style.fontSize = "95%";
    calcName.innerHTML = "Iterative Analysis For Real Diodes";
    calcName.style.transform = "translateY(0)";
    addName.innerHTML = "";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calculate.style.transform = "translateY(0)";
    calcSpaceDivs.forEach((div) => {
        if(div.id === "temp" || div.id === "Vs" || div.id === "V1" || div.id === "I1" || div.id === "decChange" || div.id === "R" || div.id === "n" || div.id === "calculate") {
            div.style.display = "flex";
            let allInputs = div.querySelectorAll("input");
            allInputs.forEach((inputs) => {
                inputs.style.padding = "5px";
                inputs.style.height = "30px";
            });
        } else {
            div.style.display = "none";
        }
    });
});
piecewiseDiv.addEventListener("click", () => {
    back2Click = 2;
    back2.style. top = "5%";
    intrinsicCalcClick = 8;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcSpace.style.fontSize = "95%";
    calcName.innerHTML = "PieceWise-Linear Analysis For Real Diodes";
    calcName.style.transform = "translateY(-7vh)";
    addName.innerHTML = "";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calculate.style.transform = "translateY(0)";
    calcSpaceDivs.forEach((div) => {
        if (div.id === "Vs" || div.id === "R" || div.id === "rd" || div.id === "Vdo" || div.id === "calculate") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
shockelyDiv.addEventListener("click", () => {
    back2Click = 2;
    back2.style. top = "5%";
    intrinsicCalcClick = 9;
    FirstScreen.classList.add("firstScreenOffJS");
    carrierConcentrationScreen.style.display = "none";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    calcSpace.style.fontSize = "95%";
    calcName.innerHTML = "Shockely Equation Analysis For Real Diodes";
    calcName.style.transform = "translateY(-7vh)";
    addName.style.transform = "translateY(-7vh)";
    addName.innerHTML = "Diode Current Calculations";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
    calcSpaceDivs.forEach((div) => {
        if (div.id === "temp" || div.id === "Is" || div.id === "n" || div.id === "Vd" || div.id === "calculate") {
            div.style.display = "flex";
        } else {
            div.style.display = "none";
        }
    });
});
back1.addEventListener("click", () => {
    carrierConcentrationScreen.classList.remove("showCarrierConcScreen");
    slides_books.classList.remove("showCarrierConcScreen");
    carrierConc.classList.remove("firstScreenOffJS");
    barrierVoltage.classList.remove("firstScreenOffJS");
    idealDiodeAnalysis.classList.remove("firstScreenOffJS");
    realDiodeAnalysis.classList.remove("firstScreenOffJS");
    slides.classList.remove("firstScreenOffJS");
    books.classList.remove("firstScreenOffJS");    
    calcContainerH3.classList.remove("firstScreenOffJS");    
    butIcons.classList.remove("firstScreenOffJS");
    calcContainer.style.height = "90vh";
    back1.style.opacity = 0;
    back1.style.pointerEvents = "none";
    extrinsicTypes.classList.remove("showExtrinsicTypesJS");
});
back2.addEventListener("click", () => {
    calcSpace.style.transform = "translateX(0)";
    if (back2Click === 1) {
        carrierConcentrationScreen.style.display = "flex";
        FirstScreen.classList.remove("firstScreenOffJS");
        calcSpace.style.opacity = 0;
        calcSpace.style.pointerEvents = "none";
        screensOn();
        outputSpace.classList.remove("outputSpaceShowJS");
        carrierConc.style.display = "flex";
    } else if(back2Click === 2) {
        carrierConcentrationScreen.style.display = "flex";
        FirstScreen.classList.remove("firstScreenOffJS");
        calcSpace.style.opacity = 0;
        calcSpace.style.pointerEvents = "none";
        screensOff();
        outputSpace.classList.remove("outputSpaceShowJS");
        carrierConc.style.display = "flex";    
    } else {
        calcSpace.style.opacity = 0;
        calcSpace.style.pointerEvents = "none";
        outputSpace.classList.remove("outputSpaceShowJS");
        FirstScreen.classList.add("firstScreenOffJS");
        carrierConcentrationScreen.style.display = "flex";
        screensOff();
    }
});
back3.addEventListener("click", () => {
    outputSpace.classList.remove("outputSpaceShowJS");
    calcSpace.style.transform = "translateX(0)";
    calcSpace.style.opacity = 1;
    calcSpace.style.pointerEvents = "all";
    
});
//Developer: Abdulai Umar Tijani (3360522)
//Tel: 05536342775 / 0248782542