const hardware = ["monitor", "teclado", "mouse", "placa-mãe", "CPU"];

hardware.push("placa de video");
hardware.shift(hardware[0]);

console.log(hardware[0]);
console.log(hardware[1]);
console.log(hardware[2]);
console.log(hardware[3]);
console.log(hardware[4]);  