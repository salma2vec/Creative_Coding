// Disclaimer: The below mentioned "statements" are fictional, created keeping in mind the sentiments of the depressed. 
// Well, more like, copied from Google. Anyways, the main aim is to spread awareness through this visualization.

var text = [
		[
			"Don't worry about me.",
			"Everything's fine.",
			"Everything's okay.",
			"I'm good.",
			"I'm great.",
			"It's okay."
		],
		[
			"Everything is awful.",
			"Every day is harder than the last.",
			"Every morning, I feel neutral. Not happy, not sad, just neutral. More like, Meh...",
			"I don't want to get out of bed.",
			"I'm afraid of burdening others with problems in my head I don't even understand.",
			"Everything feels hollow and pointless and empty.",
			"Everything is so pointless.",
			"I am nothing.",
			"I am so alone.",
			"I can't do this any longer.",
			"I can't remember when this started.",
			"I can't stand feeling like this.",
			"I can't talk with anybody about this.",
			"I don't have any energy left.",
			"I am only surviving.",
			"I feel like giving up.",
			"I feel like I'm drowning.",
			"I feel like I've failed in life.",
			"I feel so alone.",
			"I get bullied.",
			"I hate me.",
			"I hate my life.",
			"I hate myself.",
			"I have no one.",
			"I have nobody to share my problems with.",
			"I have nobody to talk to.",
			"I have to get up each morning and put on a show.",
			"I know nobody will ever understand me.",
			"I mean nothing to them.",
			"I need help.",
			"I need to vent.",
			"I smile, but behind the façade, I'm a wreck.",
			"I want to die.",
			"I'm a disgrace.",
			"I'm a failure.",
			"I'm a loser.",
			"I'm boring.",
			"I'm in pain.",
			"I'm losing hope with each passing day.",
			"I'm miserable.",
			"I'm not fine.",
			"I'm so confused.",
			"I'm so depressed.",
			"I'm so scared.",
			"I'm suffering.",
			"I'm tearing up inside.",
			"I'm tired of feeling this way",
			"I'm weak.",
			"It feels like nothing matters anymore.",
			"It hurts to feel this way.",
			"It's just terrible.",
			"It's just horrible.",
			"It's so hard.",
			"My grades are terrible.",
			"My life is meaningless.",
			'My so-called "friends" only talk to me when they need something.',
			"My family probably hates me.",
			"Nobody understands.",
			"Nobody understands me.",
			"Nobody understands how I feel.",
			"Nobody would believe that I feel this way.",
			"Nothing fills the void.",
			"Pretending to be happy is killing me inside.",
			"There is so much heartache.",
			"When did everything go wrong?",
			"Why me?",
			"Will it ever get better?"
		]
	];

var message = function() {

		var span = document.createElement("span"),
			speed = Math.ceil(Math.random() * 4);

		if (Math.random() < 0.01) {
			span.appendChild(document.createTextNode(text[0][Math.floor(Math.random() * text[0].length)]));
			span.className = "fake";
		}

		else
			span.appendChild(document.createTextNode(text[1][Math.floor(Math.random() * text[1].length)]));
		document.body.appendChild(span);

		span.style.left = document.body.clientWidth + "px"; 
		span.style.top = Math.floor(Math.random() * (document.body.clientHeight - span.clientHeight)) + "px";
		spans[speed].push(span);

		setTimeout(
			function() {
				requestAnimationFrame(message);
			},

			Math.random() * span.clientHeight / document.body.clientHeight * 50000
		);

	},
	scroll = function() {

		requestAnimationFrame(scroll);

		for (var speed = 1; speed < spans.length; speed++) {

			for (var x = 0; x < spans[speed].length; x++) {

				var left = parseInt(spans[speed][x].style.left, 10) - speed;
				spans[speed][x].style.left = left + "px";

				if (left == -1 * spans[speed][x].clientWidth) {

				document.body.removeChild(spans[speed][x]);

					for (y = x; y < spans[speed].length - 1; y++)
						spans[speed][y] = spans[speed][y + 1];
					spans[speed].pop();

					if (x < spans[speed].length - 1)
						x--;
				}
			}
		}
	},
	spans = [null, [], [], [], []];

message();
scroll();





"use strict";
var createProjectTitle = function (e) {
    return $("<h3 />").text(e);
  },
  createProjectLinks = function (e) {
    var a = $('<ul class="project-links" />');
    return (
      e.map(function (e) {
        var t = $("<li />"),
          n = $("<a />");
        n.attr("href", e.link),
          n.attr("rel", "noopener"),
          n.attr("target", "_blank"),
          n.html('<i class="' + e.icon + '"></i>'),
          t.append(n),
          a.append(t);
      }),
      a
    );
  },
  createProjectLanguage = function (e) {
    var t = $('<span class="project-lang"/>');
    return (
      t.html(
        '<i class="' +
          {
            HTML: "fab fa-html5",
            CSS: "fab fa-css3-alt",
            JavaScript: "fab fa-js"
          }[e] +
          '" style="color: ' +
          { HTML: "#f0500c", CSS: "#16a2da", JavaScript: "#f5bd07" }[e] +
          '; font-size: 1.5rem"></i>'
      ),
      t
    );
  };
$(document).ready(function () {
  fetch("https://api.github.com/users/EstebanBorai/repos")
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      return e.filter(function (e) {
        if (-1 !== e.name.indexOf("fcc") && e.language) {
          var t = $("<li />");
          t.addClass("project-tile");
          var n = createProjectTitle(e.name);
          t.append(n);
          var a = $('<span class="project-desc" />');
          a.text(e.description), t.append(a);
          var o = $('<div class="project-data"/>'),
            r = createProjectLinks([
              { link: e.homepage, icon: "fa fa-link" },
              { link: e.html_url, icon: "fab fa-github-alt" }
            ]);
          o.append(r);
          var c = createProjectLanguage(e.language);
          o.append(c), t.append(o), $("#projects-list").append(t);
        }
      });
    })
    .catch(function (e) {
      $("#portfolio-error").text(e);
    });
}),
  document.documentElement.scrollIntoView
    ? document.querySelectorAll('a[href^="#"]').forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault(),
            document
              .querySelector(this.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
        });
      })
    : $(document).on("click", 'a[href^="#"]', function (e) {
        e.preventDefault(),
          $("html, body").animate(
            { scrollTop: $($.attr(this, "href")).offset().top },
            500
          );
      }),
  (function (t) {
    t.fn.extend({
      teletype: function (e) {
        var a = t.extend({}, t.teletype.defaults, e);
        return t(this).each(function () {
          !(function e(t, n) {
            !(function e(t, n, a, o, r) {
              t.html(function (e, t) {
                return t + n[a];
              }),
                a < n.length - 1
                  ? setTimeout(function () {
                      e(t, n, a + 1, o, r);
                    }, o)
                  : r();
            })(t, a.text[n], 0, a.delay, function () {
              setTimeout(function () {
                !(function e(t, n, a) {
                  var o;
                  t.html(function (e, t) {
                    return (o = t.length), t.substr(0, o - 1);
                  }),
                    1 < o
                      ? setTimeout(function () {
                          e(t, n, a);
                        }, n)
                      : a();
                })(t, a.delay, function () {
                  e(t, (n + 1) % a.text.length);
                });
              }, a.pause);
            });
          })(t(this), 0);
        });
      }
    }),
      t.extend({
        teletype: { defaults: { delay: 100, pause: 2e3, text: [] } }
      });
  })(jQuery),
  $("#welcome-message").teletype({
    text: [
      "Hey there, I'm Salma!",
      "안녕하세요, 살마입니다.",
      "I am a computer science engineering freshman at VIT-AP.",
      "And, I'm working on Front-End Web Development with a UX / UI focus.",
      "Feel free to connect with me!"
      ,"안녕"
    ]
  }),
  $("#cursor").teletype({ text: ["_"], delay: 0, pause: 50 });
