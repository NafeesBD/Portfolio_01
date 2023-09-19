// Auto Type Text

let arr = ["Web Designer", "Web Developer", "Front End Developer", "Back End Developer", "Full Stack Developer"];

let arryIndex_number = 0;

let arryTextIndex_number = 0;

setInterval(textType, 200);

function textType() {
  let totalArry_countNumber = arr[arryIndex_number];

  let arryCount_number_and_totalText_countNumber = totalArry_countNumber.slice(0, arryTextIndex_number++);

  document.getElementById("s1").innerHTML = arryCount_number_and_totalText_countNumber;

  if (arryCount_number_and_totalText_countNumber.length == totalArry_countNumber.length) {
    arryIndex_number++;

    arryTextIndex_number = 0;
  }

  if (arryIndex_number == arr.length) {
    arryIndex_number = 0;
  }
}

// jquery

$("#html").LineProgressbar({
  percentage: 99,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#9b59b6",
});

$("#css").LineProgressbar({
  percentage: 98,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#3498db",
});
$("#bootstrap").LineProgressbar({
  percentage: 98,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#1abc9c",
});

$("#javascript").LineProgressbar({
  percentage: 85,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#f1c40f",
});

$("#jquery").LineProgressbar({
  percentage: 95,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#27ae60",
});

$("#php").LineProgressbar({
  percentage: 50,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#341f97",
});

$("#wordpress").LineProgressbar({
  percentage: 90,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#01a3a4",
});

$("#Python").LineProgressbar({
  percentage: 30,
  radius: "3px",
  height: "15px",
  duration: 2000,
  fillBackgroundColor: "#ff9f1a",
});

// up to bottom arrow

let arrow_Div = document.getElementById("arrowMain");

window.onscroll = function () {
  let scrollOption = scrollY;

  if (scrollOption > 1000) {
    arrow_Div.classList.add("active");
  } else {
    arrow_Div.classList.remove("active");
  }
};
