const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Schema/TheUser");

const TheloginUser = async (Request, Response) => {

	try {
		const { email, ThePassword } = Request.body;
		const ExistingUser = await User.findOne({ Email: email });
		
		if (!ExistingUser) {
			return Response.status(401).json({ message: 'Invalid email or password' });
		}

		const ValidPassword = await bcrypt.compare(ThePassword, ExistingUser.Password);

		if (!ValidPassword) {
			return Response.status(401).json({ message: 'Invalid email or password' });
		}
		
		const TheToken = jwt.sign({email: ExistingUser.Email}, process.env.JWT_SECRET );

		return Response.status(201).json({message: 'Okay', TheToken});
	} catch (err) {
		console.error('Error during login:', err);
		Response.status(500).json({ error: 'Server error' });
	}
}

module.exports = TheloginUser
