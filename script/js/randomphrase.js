const Phrases = Array(
	"The world's greatest Endless Sky plugin.",
	"Where that one Hai ambassador reigns supreme.",
	"The Anime Organization - archiving mankind's anime since 2344 CE",
	"RNS Triggerhappy: A salvager's worst enemy",
	"Best of luck to you, First Last!",
	"I've been a textile worker on New Boston for God knows how long.",
	"The all-new Amidala-class Battleship. Based on alien designs.",
	"I've heard Orbona is a great place for salvage.",
	"The SPA - letting kids sleep at night with their Sayari Plushies since God knows how long.",
	"Illumina Regions tours, 15% off",
	"git clone https://github.com/a-random-lemurian/Lemurias-Extra-ES-Stuff.git"
)
function getPhrase() {
	let phraseIndex = Math.floor(Math.random() * Phrases.length);
	document.getElementById("randphrase").innerHTML = Phrases[phraseIndex];
};

function consolelogmsgs() {
	let incrementedPhraseIndex = 0
	while (incrementedPhraseIndex < Phrases.length) {
		console.log(Phrases[phraseIndex]);
	}
}
function consoleLogCopyright() {
	let CopyrightMessage = 'Dear user, this webpage is copyright (C) Lemuria 2021 and you may use this content under the terms of the GNU General Public License.'
	console.log(CopyrightMessage)
}