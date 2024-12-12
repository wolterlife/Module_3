// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/

function grabDoll(dolls) {
  var bag = [];

  for (var i = 0; i < dolls.length; i++) {
    if (bag.length === 3) break;

    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;

    bag.push(dolls[i]);
  }

  return bag;
}

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));