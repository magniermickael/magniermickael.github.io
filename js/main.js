// —————————————————————————————————————————————————————————————————————————————————————————
// DEBUT configurer le texte à imprimer, chaque élément du tableau est une nouvelle ligne 
// —————————————————————————————————————————————————————————————————————————————————————————

var aText = new Array(
    "Développeur PHP / MySQL / Symfony ",
    "Java / FX / JEE (création servlet, webservice)", 
    "HTML5/CSS Bootstrap / jQuery / Ajax",
    "Javascript Front/Back."
    );
    var iSpeed = 100; // délai d'impression
    var iIndex = 0; // commencer à imprimer le tableau à cette position
    var iArrLength = aText[0].length; // la longueur du tableau de texte
    var iScrollAt = 20; // commencer à faire défiler vers le haut à autant de lignes
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contenu variable
    var iRow; // initialiser la ligne actuelle
  
    function typewriter(){
      sContents =  ' ';
      iRow = Math.max(0, iIndex-iScrollAt);
      var destination = document.getElementById("typedtext");
      while ( iRow < iIndex ){
        sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
          iArrLength = aText[iIndex].length;
          setTimeout("typewriter()", 500);
        }
      } else {
        setTimeout("typewriter()", iSpeed);
        }
      }
    typewriter();
  
  // —————————————————————————————————————————————————————————————————————————————————————————
  // FIN configurer le texte à imprimer, chaque élément du tableau est une nouvelle ligne 
  // —————————————————————————————————————————————————————————————————————————————————————————
  
  
  
  //------------------------------------------------------------------------------------
  //DEBUT de text typing thingamy
  //-----------------------------------------------------------------------------------
  var words = ['Educations','Apprentissages','Formations'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 20,
    speed = 100;
  
  var wordflick = function(){
    setInterval(function(){
        if (forwards) {
          if(offset >= words[i].length){
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        }
        else {
           if(offset == 0){
              forwards = true;
              i++;
              offset = 0;
              if(i >= len){
                i=0;
              } 
           }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          }
          else {
            offset--;
          }
        }
          $('.word').text(part);
    },speed);
  };
  
  $(document).ready(function(){
    wordflick();
  });
  
  //------------------------------------------------------------------------------------
  //FIN de text typing thingamy
  //-----------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------------
  // ——————————————————————————————————————————————————
  // DEBUT TextScramble experiences professionnelles
  // ——————————————————————————————————————————————————
  
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?%#__²__'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 80)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  
  const phrases = [
    'Expériences', 'Emplois' 
  ]
  
  const el = document.querySelector('.text_exp')
  const fx = new TextScramble(el)
  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2800)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()
  
  // ——————————————————————————————————————————————————
  // FIN TextScramble experiences professionnelles
  // ——————————————————————————————————————————————————
  //-------------------------------------------------------------------------------------------------------------
  // ——————————————————————————————————————————————————
  // skills
  // ——————————————————————————————————————————————————
  
  
  jQuery(document).ready(function( $ ) {
  
    // Smooth scroll for the menu and links with .scrollto classes
    $('.smothscroll').on('click', function(e) {
      e.preventDefault();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
  
          $('html, body').animate({
            scrollTop: target.offset().top - 62
          }, 1500, 'easeInOutExpo');
        }
      }
    });
  
    $('.carousel').carousel({
      interval: 3500
    });
  
    // JavaScript Chart
    var doughnutData = [{
        value: 70,
        color: "#1abc9c"
      },
      {
        value: 30,
        color: "#ecf0f1"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
  
    // Bootstrap Chart
    var doughnutData = [{
      value: 90,
      color: "#1abc9c"
    },
    {
      value: 10,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
  
    // WordPress Chart
    var doughnutData = [{
      value: 65,
      color: "#1abc9c"
    },
    {
      value: 35,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
  
    // HTML Chart
    var doughnutData = [{
      value: 80,
      color: "#1abc9c"
    },
    {
      value: 20,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
  
    // Photoshop Chart
    var doughnutData = [{
      value: 70,
      color: "#1abc9c"
    },
    {
      value: 30,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);
  
    // Illustrator Chart
    var doughnutData = [{
      value: 50,
      color: "#1abc9c"
    },
    {
      value: 50,
      color: "#ecf0f1"
    }
    ];
    var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
  });
  //-------------------------------------------------------------------------------------------------------------
  
  
  
  
  