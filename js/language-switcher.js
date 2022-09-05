var english = document.getElementById("en"),
  french = document.getElementById("fr"),
  intro1 = document.getElementById("translate-intro1");
  intro2 = document.getElementById("translate-intro2");
  intro3 = document.getElementById("translate-intro3");
// declare some variables to catch the various HTML elements

english.addEventListener("click", function() {
    change(english, french);
  }, false
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

french.addEventListener("click", function() {
    change(french, english);
  }, false
);

function change(langOn, langOff) {
  if (!langOn.classList.contains("current-lang")) {
    // if the span that the user clicks on does not have the "current-lang" class
    langOn.classList.add("current-lang");
    // add the "current-lang" class to it
    langOff.classList.remove("current-lang");
    // remove the "current-lang" class from the other span
  }

  if (langOn.innerHTML.trim() == "EN") {
    intro1.classList.add("english");
    intro1.classList.remove("french");
    intro1.innerHTML = "FMH specialist in general internal medicine";
  }

  else if (langOn.innerHTML.trim() == "FR") {
    // first line adds the corrent language class to the text
    intro1.classList.remove("english");
    // second and third line removes the other language classes
    // this allows you to apply CSS that is specific to each language
    intro1.classList.remove("french");
    intro1.innerHTML = "Spécialiste FMH en médecine interne générale";
    // fourth line is where you key in the text that will replace what is currently on-screen
  }

  else if (langOn.innerHTML == "FR") {
    intro1.classList.add("french");
    intro1.classList.remove("english");
    intro1.innerHTML = "test en frqncqis";
  }
}