// src-v2.js




const AJV = require("ajv")
const ajv = new AJV()




const schema = {
	type: "object",
	properties: {}
}


let props = {
	site: "string",
	id: "string",
	type: "string",
	title: "string",
	description: "string",
	tags: "array",
	mentions: "array",
	url: "string",
	likes: "integer",
	dislikes: "integer",
	views: "integer",
	plays: "integer",
	shares: "integer",
	comments: "integer",
	thumbnail: "string",
	createdAt: "string",
	hasMedia: "string",
	userDisplayName: "string",
	username: "string",
	userid: "string",
	userFollowers: "integer",
	userProfileUrl: "string",
	userAvatarUrl: "string",
	platformData: "object",
	media: "array",
	raw: "object",
	test: "string"
}








function Schema(d = {}) {
	for (let [key, val] of Object.entries(props)) {
		this[key] = undefined
		schema.properties[key] = {type: val}
	}

	const validate = ajv.compile(schema)
	let valid = validate(d)
	if (!valid) {
		console.log(validate.errors)
		let error = new Error("check")
		error.errors = validate.errors
		throw error
	} 

	for (let [key, val] of Object.entries(d)) this[key] = val
}


console.log(new Schema({
	test: "test"
}))