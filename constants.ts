export const assetsPath = {
	public: {
		hero: "/hero.svg",
		mascot: "/mascot.svg",
	},
	modals: {
		mascotSad: "/modals/mascot-sad.svg",
		mascotBad: "/modals/mascot-bad.svg",
	},
	icons: {
		heart: "/icons/heart.svg",
		light: "/icons/light.svg",
		house: "/icons/house.svg",
		medal: "/icons/medal.svg",
		bullseye: "/icons/bullseye.svg",
		shop: "/icons/shop.svg",
		confettiBall: "/icons/confetti-ball.svg",
		sparklingHeart: "/icons/sparkling-heart.svg",
	},
}

export const footerCourses = [
	{
		title: "arabic",
		code: "dz",
	},
	{
		title: "spanish",
		code: "es",
	},
	{
		title: "french",
		code: "fr",
	},
	{
		title: "italian",
		code: "it",
	},
	{
		title: "japanese",
		code: "jp",
	},
]

export const sidebarItems = [
	{ iconSrc: assetsPath.icons.house, title: "learn" },
	{ iconSrc: assetsPath.icons.medal, title: "leaderboard" },
	{ iconSrc: assetsPath.icons.bullseye, title: "quests" },
	{ iconSrc: assetsPath.icons.shop, title: "shop" },
]

export const soundsPath = {
	correct: "/sounds/correct.mp3",
	incorrect: "/sounds/incorrect.mp3",
}

export const POINTS_TO_REFILL = 50
export const MAX_HEARTS = 5
export const DEFAULT_HEARTS = 5
