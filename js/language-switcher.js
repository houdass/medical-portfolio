var english = document.getElementById('en'),
  french = document.getElementById('fr'),
  intro1 = document.getElementById('translate-intro1'),
  intro2 = document.getElementById('translate-intro2'),
  intro3 = document.getElementById('translate-intro3'),
  aboutMe = document.getElementById('about-me'),
  aboutMeIntro = document.getElementById('about-me-intro'),
  aboutMe1 = document.getElementById('about-me1'),
  aboutMe2 = document.getElementById('about-me2'),
  professionalExperience = document.getElementById('experience-professional-modal-label'),
  professionalExperienceBtn = document.getElementById('experience-professional-btn'),
  training = document.getElementById('training-modal-label'),
  trainingBtn = document.getElementById('training-btn'),
  publications = document.getElementById('publications-modal-label'),
  publicationsBtn = document.getElementById('publications-btn'),
  present1 = document.getElementById('translate-present1'),
  present2 = document.getElementById('translate-present2'),
  present3 = document.getElementById('translate-present3'),
  present4 = document.getElementById('translate-present4'),
  emailSentMsg = document.getElementById('email-sent-message');

var lang = localStorage.getItem('LANG') || 'fr';


function loadJS(FILE_URL, async) {
  const scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // success event
  scriptEle.addEventListener("load", function () {
    console.log("File loaded")
  })
  // error event
  scriptEle.addEventListener("error", function (ev) {
    console.log("Error on loading file", ev);
  })

}


if (lang === 'fr') {
  loadJS("https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/localization/messages_fr.js", true);
  french.classList.add('current-lang');
} else if (lang === 'en') {
  english.classList.add('current-lang');
}

english.addEventListener(
  'click',
  function () {
    localStorage.setItem('LANG', 'en');
    // changeTo('en');
    location.reload();
  },
  false,
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

french.addEventListener(
  'click',
  function () {
    localStorage.setItem('LANG', 'fr');
    // changeTo('en');
    location.reload();
  },
  false,
);

if (lang === 'en') {
  intro1.classList.add('english');
  intro1.classList.remove('french');
  intro1.innerHTML = 'FMH specialist in general internal medicine';
  intro2.innerHTML = 'Geriatrics training';
  intro3.innerHTML = 'Nutrition expert';
  aboutMe.innerHTML = 'About - Dr. Saif Al Jarrah';
  aboutMeIntro.innerHTML = 'Dr. Saif Al Jarrah is a medical specialist in general internal medicine with a background in geriatrics and expertise in nutrition. He was trained in Switzerland, where he performs his duties in the private sector in private practice, in hospital consultations and as a trainer in general internal medicine.';
  aboutMe1.innerHTML = 'He holds 2 medical degrees, a first in English (M.B.Ch.B) in Baghdad in 2004, then a second (Swiss Federal Diploma) in Geneva in 2010. He then completed a 5-year training course to obtain his title of specialist in internal medicine in Switzerland as well as a 2-year training in geriatrics. He has also completed training in hospital and extra-hospital emergency medicine (SMUR).';
  aboutMe2.innerHTML = 'Alongside his clinical activities, he conducts research and publications on rare diseases and complex diagnostics.';
  professionalExperience.innerHTML = 'Professional experience';
  professionalExperienceBtn.innerHTML = 'Professional experience';
  training.innerHTML = 'Training';
  trainingBtn.innerHTML = 'Training';
  publications.innerHTML = 'Publications';
  publicationsBtn.innerHTML = 'Publications';
  present1.innerHTML = 'present';
  present2.innerHTML = 'present';
  present3.innerHTML = 'present';
  present4.innerHTML = 'present';
  emailSentMsg.innerHTML = 'We have received your message and we thank you for it.';
} else if (lang === 'fr') {
  // first line adds the corrent language class to the text
  intro1.classList.remove('english');
  // second and third line removes the other language classes
  // this allows you to apply CSS that is specific to each language
  intro1.classList.remove('french');
  intro1.innerHTML = 'Spécialiste FMH en médecine interne générale';
  intro2.innerHTML = 'Formation en gériatrie';
  intro3.innerHTML = 'Expert en nutrition';
  aboutMe.innerHTML = 'À propos de - Dr. Saif Al Jarrah';
  aboutMeIntro.innerHTML =
    'Le Dr. Saif Al Jarrah est médecin spécialiste en médecine interne générale avec une formation en gériatrie et une expertise en nutrition. Il a été formé en Suisse, où il assume ses fonctions dans le secteur privé en cabinet, en consultations hospitalières et en tant que médecin formateur en médecine interne générale.';
  aboutMe1.innerHTML = 'Il est titulaire de 2 diplômes de médecine, un premier anglais (M.B.Ch.B) à Bagdad en 2004, puis un deuxième (Diplôme fédéral suisse) à Genève en 2010. Il a achevé par la suite une formation de 5 ans pour obtenir son titre de spécialiste en médecine interne en Suisse ainsi qu\'une formation de 2 ans en gériatrie. Il a également achevé une formation en médecine d’urgence hospitalière et extrahospitalière (SMUR).'

  aboutMe2.innerHTML =
    'En parallèles à ses activités cliniques, il effectue des recherches et publications au sujet de maladies rares et de diagnostiques complexes.';
  professionalExperience.innerHTML = 'Expérience professionnelle';
  professionalExperienceBtn.innerHTML = 'Expérience professionnelle';
  training.innerHTML = 'Formation';
  trainingBtn.innerHTML = 'Formation';
  publications.innerHTML = 'Publications';
  publicationsBtn.innerHTML = 'Publications';
  present1.innerHTML = 'présent';
  present2.innerHTML = 'présent';
  present3.innerHTML = 'présent';
  present4.innerHTML = 'présent';
  emailSentMsg.innerHTML = 'Nous avons bien reçu votre message et nous vous en remercions.';
}
