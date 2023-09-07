const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
    if(btn.style.backgroundColor == "green"){
        btn.style.backgroundColor = "rgb(207, 197, 197)"
        btn.style.color = "rgb(207, 197, 197)"
    }else{
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    }
});




const visasPareizaAtbilde = [""] 

  for (let i = 1; i<=3; i++) {

    const visasAtbildes = document.getElementsByName(i);

  

visasAtbildes.forEach((atbilde) => {

  atbilde.addEventListener("click",() =>
      checkHandler(visasPareizaAtbilde[i-1],visasAtbildes)
  );
  });

}
/**
 * iekrāso atbildes vienā jautājumā
 * @param {string} pareizaAtbilde - pareizās atbildes ar vārdiem jāsakrīt ar vārdiem, value.
 * @param {nodelist} visasAtbildes - 4 input elementi atbildes uz jautājumu.
 */
function checkHandler(pareizaAtbilde,visasAtbildes) {

  visasAtbildes.forEach((atbilde) => {

    if (atbilde.checked == true) {

      if (atbilde.value == pareizaAtbilde) {
        atbilde.parentNode.style.backgroundColor = "Green";

      } else {
        if(atbilde.parentNode.style.backgroundColor == "red"){
            atbilde.parentNode.style.backgroundColor = "rgb(49, 44, 43)"
        }else{
        atbilde.parentNode.style.backgroundColor = "red";
        }
      }

    } else {

      atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
}
});
}