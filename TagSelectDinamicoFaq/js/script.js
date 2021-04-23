document.querySelectorAll(".attiva_paragrafo").forEach(button => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("accordion__button-dopo");

    if(button.classList.contains("accordion__button-dopo")){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
    else {
      accordionContent.style.maxHeight = 0;
    }
  })
})