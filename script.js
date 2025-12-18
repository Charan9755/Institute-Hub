document.getElementById("sidebarToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
  });

  let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  
  if (n >= slides.length) {
    slideIndex = 0;
  }
  
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  slides[slideIndex].style.display = 'block';
  
  // Automatically advance to the next slide after 3 seconds (adjust as needed)
  setTimeout(nextSlide, 2000);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

showSlide(slideIndex);

// Administration

function showTopic(topicId) {
  var topics = document.querySelectorAll('.topic');
  topics.forEach(function(topic) {
    if (topic.id === topicId) {
      topic.style.display = 'flex';
    } else {
      topic.style.display = 'none';
    }
  });
}

function showProgram(programId) {
  var programs = document.querySelectorAll('.program');
  programs.forEach(function(program) {
    if (program.id === programId) {
      program.style.display = 'block';
    } else {
      program.style.display = 'none';
    }
  });
}

function buttonColor(clickedButton) {
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  clickedButton.classList.add('active');
}

function buttonColor1(clicked) {
  var buttons1 = document.querySelectorAll('.button1');
  buttons1.forEach(function(button) {
    button.classList.remove('activ');
  });
  clicked.classList.add('activ');
}





