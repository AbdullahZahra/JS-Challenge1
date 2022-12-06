const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHegherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHegherBMI); 
