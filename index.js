// Домашнє завдання 11.01.2023
// Object
// Створити функцію конструктор для Cattle(brand, maxVolume, minVolume)
// Властивості:
// brand
// maxVolume
// minVolume
// currentVolume = 0
// isOn = false
// Методи:
// addWater(value) //налий води
// makeTea(value)  //відлий воду
// turnOn()  //кип'яти
/**
 *
 * @param {string} brand
 * @param {value} maxVolume
 * @param {value} minVolume
 */
function Cattle(brand, maxVolume, minVolume) {
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.minVolume = minVolume;
  this.currentVolume = 0;
  this.isOn = false;

  this.turnOn = function () {
    if (
      this.currentVolume > this.minVolume &&
      this.currentVolume < this.maxVolume
    ) {
      return (this.isOn = true);
    }
  };
  this.addWater = function (value) {
    if (this.currentVolume + value >= maxVolume) {
      this.currentVolume = maxVolume;
    } else {
      this.currentVolume += value;
    }
    return this.currentVolume;
  };
  this.makeTea = function (value) {
    if (this.currentVolume - value <= 0) {
      this.currentVolume = 0;
    } else {
      this.currentVolume -= value;
    }
    return this.currentVolume;
  };
}
const appliance = new Cattle("bosch", 2000, 500);
console.log(appliance.addWater(100));
console.log(appliance.addWater(100));
console.log(appliance.addWater(100));
console.log(appliance.makeTea(100));
console.log(appliance.makeTea(100));
console.log(appliance.addWater(100));
console.log(appliance.addWater(100));
console.log(appliance.addWater(100));
console.log(appliance.addWater(100));
console.log(appliance.turnOn());
