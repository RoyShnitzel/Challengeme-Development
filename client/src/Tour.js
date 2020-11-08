const steps = [
    {
      arrow: true,
      attachTo: {
        element: "#tourStart",
        on: "left",
      },
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Next",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "welcome to challengeMe!",
      text: ["hope you are exited to start your programming journey"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    {
      attachTo: {
        element: ".challenge-card",
        on: "left",
      },
      arrow: true,
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Next",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "Challenge Card",
      text: ["This is the challenge card, press on it and it will take to the challenge page"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    {
      attachTo: {
        element: ".home-page-challenge-labels",
        on: "left"
      },
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Next",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "Labels",
      text: ["this is the challenge labels, they will help you to decide which challenge is the most suitable for you"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    {
      attachTo: {
        element: "#searchBar",
        on: "left"
      },
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Next",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "Search area",
      text: ["Here you can search for challenges and filter the by labels"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    {
      attachTo: {
        element: "#darkModeToggle",
        on: "top"
      },
      arrow: true,
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Next",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "Dark mode toggle",
      text: ["You can also try our dark theme"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    {
      attachTo: {
        // element: "",
        on: "bottom"
      },
      beforeShowPromise: function() {
          return new Promise(function(resolve) {
            setTimeout(function() {
              window.scrollTo(0, 0);
              resolve();
            }, 500);
          });
        },
      buttons: [
        {
          text: "Back",
          type: "back"
        },
        {
          text: "Done !",
          type: "next"
        }
      ],
      highlightClass: 'highlight',
      scrollTo: true,
      showCancelLink: true,
      title: "Hope you will enjoy",
      text: ["Wish you success in your next challenge!"],
      when: {
        show: () => {
          console.log("show step");
        },
        hide: () => {
          console.log("hide step");
        }
      }
    },
    
  ];
  
  export default steps;