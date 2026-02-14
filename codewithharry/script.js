console.log("hello world");

let x = document.querySelector(".box1");

let h = document.body;

x.addEventListener("click", function () {
  // Code to run when the box is clicked

  x.style.backgroundColor = "red";
  h.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/thumbnails/054/322/532/small/pink-heart-showing-love-symbol-surrounded-by-water-droplets-and-blurred-background-photo.jpg')";
  h.style.backgroundSize = "cover";
  h.style.color = "red";
  h.innerHTML = "SACHIN LOVE SUNNY";

  h.style.backgroundColor = "aqua";
  h.style.display = "flex";
  h.style.alignItems = "center";
  h.style.justifyContent = "center";
  h.style.fontSize = "5rem";
  h.style.marginTop = "80px";
});

let y = document.querySelector(".box2");

y.addEventListener("click", function () {
  // Code to run when the box is clicked
  y.style.backgroundColor = "green";
  h.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/thumbnails/054/322/532/small/pink-heart-showing-love-symbol-surrounded-by-water-droplets-and-blurred-background-photo.jpg')";
  h.style.backgroundSize = "cover";
  h.style.color = "red";
  h.innerHTML = "DISHANT LOVE VANI";

  h.style.backgroundColor = "aqua";
  h.style.display = "flex";
  h.style.alignItems = "center";
  h.style.justifyContent = "center";
  h.style.fontSize = "5rem";
  h.style.marginTop = "80px";
});

let z = document.querySelector(".box3");

z.addEventListener("click", function () {
  // Code to run when the box is clicked
  z.innerHTML = "Sachin patel";
  z.style.backgroundColor = "aqua";
  h.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/thumbnails/054/322/532/small/pink-heart-showing-love-symbol-surrounded-by-water-droplets-and-blurred-background-photo.jpg')";
  h.style.backgroundSize = "cover";
  h.style.color = "red";
  h.innerHTML = "MANNAN LOVE SIYA";

  h.style.backgroundColor = "aqua";
  h.style.display = "flex";
  h.style.alignItems = "center";
  h.style.justifyContent = "center";
  h.style.fontSize = "5rem";
  h.style.marginTop = "80px";
});

let a = document.querySelector(".box4");

a.addEventListener("click", function () {
  // Code to run when the box is clicked
  a.innerHTML = "Sachin patel land";
  a.style.backgroundColor = "yellow";

  h.style.backgroundImage =
    "url('https://static.vecteezy.com/system/resources/thumbnails/054/322/532/small/pink-heart-showing-love-symbol-surrounded-by-water-droplets-and-blurred-background-photo.jpg')";
  h.style.backgroundSize = "cover";
  h.style.color = "red";
  h.innerHTML = "CHIKKU  LOVE SACHIN";

  h.style.backgroundColor = "aqua";
  h.style.display = "flex";
  h.style.alignItems = "center";
  h.style.justifyContent = "center";
  h.style.fontSize = "5rem";
  h.style.marginTop = "80px";
});


    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function changeColor() {
      const boxes = document.querySelectorAll(".box");

      setInterval(() => {
        boxes.forEach(box => {
          box.style.backgroundColor = getRandomColor();
        });
      }, 500); // change every 0.5 seconds
    }

    changeColor();


let c = document.querySelector(".click");

c.addEventListener("click", function () {
  // Code to run when the box is clicked
   h.innerHTML = "YOU ARE HACKED";
   h.style.display = "flex";
  h.style.alignItems = "center";
  h.style.justifyContent = "center";
  h.style.fontSize = "5rem";
  h.style.marginTop = "80px";
  h.style.backgroundColor = "green";
});


//  const main = document.getElementsByClassName("container")[0];
//     let arr = ["https://www.bing.com/th/id/OIP.Vbtsf_UMGEXdpDbyd1_RewHaHa?w=214&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
// "https://tse3.mm.bing.net/th/id/OIP.-PdCuaT5BKG_pN1BiaM83QHaHY?pid=ImgDet&w=206&h=206&c=7&dpr=1.3&o=7&rm=3",
// "https://www.bing.com/th/id/OIP.kf3rbDAdmf-urpG-Z05n-gHaH8?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
// "https://th.bing.com/th/id/OIP.9x6Ni4BSeQaF6E7eV03S_QHaHV?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
// "https://th.bing.com/th/id/OIP.5CgEj3-_RDFLTuiQNE0ZcAHaG0?w=194&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
// "https://th.bing.com/th/id/OIP.OMbhpQ0z9sDB4J7O1CKblAHaKZ?w=126&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" ];
// let s = "";
//     for (let i = 0; i < 65; i++) {
//         let r = Math.floor(Math.random() *arr.length);
//         s += `<div class="box"><img src=${arr[r]} ></div>`;
//     }
//     main.innerHTML = s;




// "https://www.bing.com/th/id/OIP.Vbtsf_UMGEXdpDbyd1_RewHaHa?w=214&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
// "https://tse3.mm.bing.net/th/id/OIP.-PdCuaT5BKG_pN1BiaM83QHaHY?pid=ImgDet&w=206&h=206&c=7&dpr=1.3&o=7&rm=3",
// "https://www.bing.com/th/id/OIP.kf3rbDAdmf-urpG-Z05n-gHaH8?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
// "https://th.bing.com/th/id/OIP.9x6Ni4BSeQaF6E7eV03S_QHaHV?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
// "https://th.bing.com/th/id/OIP.5CgEj3-_RDFLTuiQNE0ZcAHaG0?w=194&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
// "https://th.bing.com/th/id/OIP.OMbhpQ0z9sDB4J7O1CKblAHaKZ?w=126&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"