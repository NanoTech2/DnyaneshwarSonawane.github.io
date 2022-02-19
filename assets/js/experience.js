AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/lpv.jpg",
    place: "LPV WELTWEIT SOLUTIONS PRIVATE LIMITED",
    time: "(Nov, 2021 - Feb, 2022)",
    desp: "<li>Worked to migrate LPV WELTWEIT SOLUTIONS  Website to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Java Developement Intern",
    cardImage: "assets/images/experience-page/is.png",
    place: "Infopillar Solution",
    time: "(Dec,2021 - Jan, 2022)",
    desp: "<li>Worked with Java Developer as a Java Development Intern.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Python Development Associate",
    cardImage: "assets/images/experience-page/iep.png",
    place: "The Entrepreneurship Network ",
    time: "(Nov, 2020 - Feb, 22)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
  {
    title: "Software Testing Associate",
    cardImage: "assets/images/experience-page/iet.png",
    place: "The Entrepreneurship Network ",
    time: "(Nov, 2020 - Feb, 22)",
    desp: "<li>Worked on the project Testing .</li><li>Automate Tested the  software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li><li>Automation and Manual Testing on Various Software.</li>",
  },
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/pwd.png",
    place: "Peacock Solar ",
    time: "(Nov, 2021 - Jan, 22)",
    desp: "<li>Developed various Website for Peacock Solar Functions and Events.</li><li>Developed Official Website of Peacock Solar.</li><li>Manage various Web Pages of Peacock Solar.</li>",
  },
  {
    title: "Campus Ambassador",
    cardImage: "assets/images/experience-page/NEOc.jpg",
    place: "National Engineering Olympiad",
    time: "(Oct, 2021 - Nov, 22)",
    desp: "<li>Marketing.</li><li>Content Writing.</li><li>Advertising.</li>",
  },
  {
    title: "HR Intern",
    cardImage: "assets/images/experience-page/Umeed-1.jpg",
    place: "UMEED- A Drop of Hope",
    time: "(Oct, 2021 - Nov, 22)",
    desp: "<li>Marketing.</li><li>Social Work.</li><li>HR.</li><li>Environment.</li>",
  },

  

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

