// test.js



// test.js


const Schema = require("./src")
const schema = new Schema({
	raw: {},
	site: "instagram",
	id: "abc123",
	type: "video",
	title: "This is content",
	description: "hey guys buy my merch",
	tags: ["apples", "oranges", "bananas"],
	mentions: ["kanyewest"],
	url: "https://instagram.com/post/abc123",
	likes: 500,
	dislikes: 2,
	views: 8675309,
	plays: 69,
	shares: 420,
	comments: 800,
	thumbnailUrl: "https://instagram.com/post/abc123/thumbnail.jpg",
	createdAt: new Date(),
	timestamp: Date.now(),
	userDisplayName: "john smith",
	username: "johnsmith123",
	userid: "123456789",
	userFollowers: 100,
	userProfileUrl: "https://instagram.com/johnsmith123",
	userAvatarUrl: "https://instagram.com/johnsmith123/avatar.jpg",
	platformData: {
		test: "test"
	},
	media:[{
		url: "https://instagram.com/post/abc123/image.jpg",
		type: "image",
		id: "abc123",
		codec: "mp4",
		ext: ".mp4",
		filename: "file.mp4"
	}]
})


console.log(schema)