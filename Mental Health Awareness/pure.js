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


