// Функция, возвращающает случайное целое число из переданного диапазона включительно
// Если параметры min и max равны, функция вернет равное им число
// Функция вернет undefined, если: в заданный диапазон попадают числа меньше нуля; если max меньше min
const getRandom = function(min, max) {
  if(max-min >= 0 && min >= 0){
    return Math.floor(Math.random() * (max - min+1) + min);
  }
};

getRandom(0, 8);

// Функция для проверки максимальной длины строки.
// Результат: true, если строка проходит по длине, и false — если не проходит
const checkStringLength = function (string, limit) {
  return string.length <= limit;
};
checkStringLength('Привет, как дела?', 140);
