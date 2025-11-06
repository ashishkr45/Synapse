import mongoose, { Schema, Types } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
	.connect(process.env.MONGO_URL as string)
	.then(() => { console.log("Connected to DB") })
	.catch((errMessage) => { console.log(`MongoDB connection error: ${errMessage}`) });

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},

	username: {
		type: String,
		required: false,
	},

	googleId: {
		type: String,
		unique: true,
		required: true
	},

	profilePicUrl: {
		type: String,
		required: false
	},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Content Schema
const contentType = [
	"article", "tweet", "link", "document", 
	"youtube", "code", "thread", "note", "quote", "event", 
	"bookmark", "post", "reel",
];

const contentSchema = new Schema({
	link: { type: String, },
	type: { type: String, enum: contentType, required: true },
	note: { type: String, },
	title: { type: String, required: true },
	tags: [{ type: Types.ObjectId, ref: 'Tag' }],
	userId: { type: Types.ObjectId, required: true, ref: 'User' },
	shareLink: { type: String, unique: true, sparse: true },
	createdAt: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

// Tag Schema
const tagSchema = new Schema({
	title: { type: String, required: true, unique: true }
});

const Tag = mongoose.model('Tag', tagSchema);

// Link Schema
// const linkSchema = new Schema({
// 	hash: { type: String, required: true },
// 	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
// });

// const Link = mongoose.model('Link', linkSchema);

export { User, Content, Tag };
