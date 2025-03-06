window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    const navbar = document.querySelector('.navbar');
    const bannerBottom = banner.offsetTop + banner.offsetHeight;
    if (window.pageYOffset >= bannerBottom - 1) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -1;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLi.forEach(links => {
        links.classList.remove('activity');
        document.querySelector('nav ul li a[href*=' + id + ']').classList.add('activity');
      });
    };
  });
};




// portfolio card filtering
cardfilter("all")
function cardfilter(c) {
  var x, i;
  x = document.getElementsByClassName("item-card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



// ----------
function copyToClipboard(event, element) {
  event.preventDefault(); // ป้องกันการเปิดลิงก์

  const text = element.innerText || element.textContent; // ดึงข้อความจาก <a>
  const textarea = document.createElement("textarea");

  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  // alert("คัดลอกแล้ว: " + text); // แจ้งเตือนผู้ใช้
}

function contact() {
  window.location.href = 'https://www.facebook.com/teerapat.suksamang';
}
