let a = document.getElementsByClassName("btn btn-red")[0];
let heroInput = document.querySelector("input");

a.addEventListener("click", function () {
  // Change input styles and text
  heroInput.value = "EMAIL VERIFIED SUCCESSFULLY!";
  heroInput.style.backgroundColor = "green";
  heroInput.style.color = "white";
  a.innerHTML = "CLICK HERE!";

  // Redirect to movies page after verification
  window.location.href = "movies.html";
});
let answers = {
  "What is NetFlix": "Netflix is a streaming service with movies and TV shows.",
  "How much does Netflix cost?": "Plans start from ₹149 per month in India.",
  "What can I watch on Netflix?":
    "You can watch movies, series, documentaries, and more.",
  "Where can I watch?":
    "On phones, tablets, laptops, TVs, and streaming devices.",
};

let faqs = document.querySelectorAll(".faqbox");
faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    let questionText = faq.querySelector("span").innerText;
    let existingAnswer = faq.querySelector(".answer");
    let icon = faq.querySelector("svg");

    document.querySelectorAll(".faqbox .answer").forEach((ans) => ans.remove());
    document
      .querySelectorAll(".faqbox svg")
      .forEach((ic) => (ic.style.transform = "rotate(0deg)"));
    if (!existingAnswer) {
      let newAnswer = document.createElement("div");
      newAnswer.classList.add("answer");
      newAnswer.style.display = "block";
      newAnswer.style.marginTop = "10px";
      newAnswer.style.padding = "10px 0";
      newAnswer.style.color = "white";
      newAnswer.style.fontSize = "16px";
      newAnswer.style.lineHeight = "1.5";
      newAnswer.style.width = "100%";
      newAnswer.style.clear = "both";
      newAnswer.style.flexBasis = "100%"
      newAnswer.style.lineHeight = "1.6";
      newAnswer.style.borderTop = "1px solid #444";
      newAnswer.style.paddingTop = "10px";
      newAnswer.innerText = answers[questionText] || "No answer available.";
      faq.appendChild(newAnswer);
      
      
      icon.style.transform = "rotate(45deg)";
      icon.style.transition = "transform 0.3s ease";
    }
  });
});

let sign = document.getElementsByClassName("btn btn-red-sm")[0];

sign.addEventListener("click" , function(){
window.location.href = "signup.html";
})
