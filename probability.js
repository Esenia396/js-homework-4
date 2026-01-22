function checkProbabilityTheory(count) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 901) + 100;

    if (randomNumber % 2 === 0) {
      even = even + 1;
    } else {
      odd = odd + 1;
    }
  }

  console.log("Кількість чисел:", count);
  console.log("Парні числа:", even);
  console.log("Непарні числа:", odd);

  console.log("Відсоток парних:", (even * 100) / count);
  console.log("Відсоток непарних:", (odd * 100) / count);
}

// виклик функції
checkProbabilityTheory(1000);
