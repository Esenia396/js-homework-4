// Об'єкт з послугами та їх цінами
var services = {
  "Стрижка": "60 грн",
  "Гоління": "80 грн",
  "Миття голови": "100 грн"
};

// Додаємо нову послугу
services["Розбити скло"] = "200 грн";

// Функція, яка рахує загальну вартість
function price() {
  var sum = 0;

  for (var key in services) {
    var value = services[key];
    value = value.replace(" грн", "");
    sum = sum + Number(value);
  }

  return sum;
}

// Функція, яка знаходить мінімальну ціну
function minPrice() {
  var min = 999999;

  for (var key in services) {
    var value = services[key];
    value = value.replace(" грн", "");
    value = Number(value);

    if (value < min) {
      min = value;
    }
  }

  return min;
}

// Функція, яка знаходить максимальну ціну
function maxPrice() {
  var max = 0;

  for (var key in services) {
    var value = services[key];
    value = value.replace(" грн", "");
    value = Number(value);

    if (value > max) {
      max = value;
    }
  }

  return max;
}

// Перевірка
console.log("Загальна вартість:", price(), "грн");
console.log("Мінімальна ціна:", minPrice(), "грн");
console.log("Максимальна ціна:", maxPrice(), "грн");
