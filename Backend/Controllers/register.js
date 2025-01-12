// const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../Schema/TheUser");

const UserRegister = async (Request, Response) => {
	const  { surname, name, email, phonenumber, thepassword, confirmpassword } = Request.body;

	try {
		const ExistingUser = await User.findOne({ Email: email});
		if (ExistingUser) {
			return Response.status(400).json({massage: 'user exist'});
		}

		const passw = await bcrypt.genSalt(10);
		const conpassw = await bcrypt.genSalt(10)
		const hashedPassw = await bcrypt.hash(thepassword, passw);
		const ConHashedPassw = await bcrypt.hash(confirmpassword, conpassw);

		const NewUser = new User({
			Name: name,
			Surname: surname,
			Email: email,
			Phone: phonenumber,
			Password: hashedPassw,
			ConfirmPass: ConHashedPassw,
		});

		await NewUser.save();

		Response.status(201).json({massage: "new user done"});
	} catch (err) {
		console.error("register error", err);
		Response.status(500).json({Error: "Sever Error"});
	}
}

module.exports = UserRegister
