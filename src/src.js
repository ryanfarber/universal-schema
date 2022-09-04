// universal-schema.js

let mediaTypes = ["image", "video", "audio", "text", "multi"]
// const https = require("https")
// const fs = require("fs")





function Schema(d = {}) {
	this._v = "1.0.0"
	let raw = undefined
	this.raw = undefined

	let props = {
		raw: {type: "*"},
		site: {type: "string"},
		id: {type: "string"},
		type: {type: "string"},
		title: {type: "string"},
		description: {type: "string"},
		tags: {type: "array", default: []},
		mentions: {type: "array", default: []},
		url: {type: "string"},
		likes: {type: "number"},
		dislikes: {type: "number"},
		views: {type: "number"},
		plays: {type: "number"},
		shares: {type: "number"},
		comments: {type: "number"},
		thumbnailUrl: {type: "string"},
		createdAt: {type: "date"},
		timestamp: {type: "number"},
		hasMedia: {type: "boolean"},
		userDisplayName: {type: "string"},
		username: {type: "string"},
		userid: {type: "string"},
		userFollowers: {type: "number"},
		userProfileUrl: {type: "string"},
		userAvatarUrl: {type: "string"},
		platformData: {type: "object", default: {}},
		media: {type: "array", default: []},
	}

	// init
	init(props, this)

	for (let [key, val] of Object.entries(d)) {

		if (!this.hasOwnProperty(key)) throw new Error(`"${key}" is not a valid property`)
		let type = getType(val)
		let validType = props[key].type
		if (key == "raw") raw = val
		else if (val && type !== props[key].type) throw new Error(`"${key}" property must be type [${validType}] but got ${type}`)

		// check media
		if (key == "media") {
			val.forEach(x => {
				if (getType(x) !== "object") throw new Error(`media must be an object`)
				this.media.push(new Media(x))
				this.hasMedia = true
			})
		} 
		// check tags
		else if (key == "tags" && val.length) {
			val.forEach(x => {
				if (getType(x) !== "string") throw new Error(`tag must be a string`)
				this.tags.push(x)
			})
		}
		// check mentions
		else if (key == "mentions" && val.length) {
			val.forEach(x => {
				if (getType(x) !== "string") throw new Error(`mention must be a string`)
				this.mentions.push(x)
			})
		}

		else this[key] = val
	}

	Object.defineProperty(this, "raw", {get: function() {return raw} })
}



function Media(d = {}) {
	let props = {
		url: {type: "string"},
		type: {type: "string"},
		id: {type: "string"},
		codec: {type: "string"},
		ext: {type: "string"},
		filename: {type: "string"},
		hasWatermark: {type: "boolean"}
	}
	init(props, this)
	for (let [key, val] of Object.entries(d)) {
		let type = getType(val)
		let validType = props[key].type
		if (type !== props[key].type) throw new Error(`"${key}" property must be type [${validType}]`)

		if (key == "type") {
			if (!mediaTypes.includes(val)) throw new Error(`media type must be one of ${mediaTypes.map(x => `"${x}"`).join(", ")}`)
			this.type = val
		} else this[key] = val
	}
}





function init(props, _this) {
	for (let [key, val] of Object.entries(props)) _this[key] = val.default || undefined
}


// returns typeof input
function getType(val) {
	let type = undefined
	if (Array.isArray(val)) type = "array"
	else if (typeof val === "object" && Object.prototype.toString.call(val) === "[object Date]") type = "date"
	else type = typeof val
	return type
}



module.exports = Schema



