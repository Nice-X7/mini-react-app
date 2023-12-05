export const Challenge_5 = () => {

function justText() {
    console.log('lincode');
}

justText()

function logging(text) {
    console.log(text);
}
logging("Welcome to LinCode course!")

function add(x,y) {
  const z = 3;

  return z * x * y;
}

console.log(add(5, 10))

function onlyPositive(number) {
  if(number < 0) {
    return false;
  }

  return true;
}
onlyPositive(-1)
}