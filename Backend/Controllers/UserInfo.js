const jwt = require("jsonwebtoken");
const User = require("../Schema/TheUser");


const dataofuser  = async (Request, Response) => {
	const { Thetoken } = Request.body;
	try {
		const RetrivedUser = jwt.verify(Thetoken, process.env.JWT_SECRET);
		const userEmail = RetrivedUser.email; 
		const userInfo = await User.findOne({Email: userEmail}); 

		if (!userInfo) {
			return Response.status(400).json({
				message: "User Not Found"
			})
		}

		return Response.status(201).json({
			status: "okay", 
			message: userInfo
		}); 

	} catch (err) {
		console.error('Error during login:', err);
		Response.status(500).json({ error: 'Server error' });
	}
}

module.exports = dataofuser;
