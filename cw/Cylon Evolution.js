// https://www.codewars.com/kata/52e5e86b2ff32887280002e4/

function Cylon(model) {
    this.model = model;
}
Cylon.prototype.attack = function() {
    return "Destroy all humans!";
};

function HumanSkin(model) {
    Cylon.call(this, model);
}

HumanSkin.prototype = Object.create(Cylon.prototype);

HumanSkin.prototype.constructor = HumanSkin;

HumanSkin.prototype.infiltrate = function() {
    return "Infiltrate the colonies";
};
