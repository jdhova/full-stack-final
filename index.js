
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const WorkModel = require('./models/Work')
 const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

require('dotenv').config();
app.use(cors())
app.use(express.json())




// mongoose.connect('mongodb://127.0.0.1:27017/travel')

const DATABASE = 'mongodb://127.0.0.1:27017/fullstack'
mongoose
    .connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log('DB Connected'));

    mongoose.connection.on('error', (err) => {
  console.log(`DB connection error: ${err.message}`);
});


app.post('/api/register', async (req, res) => {
	 console.log('here',req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.get('/api/logout',async(req,res) =>{

})



app.post('/api/work', async(req,res) => {

	const name = req.body.name
	const occupation = req.body.occupation
	const hoursworked = req.body.hoursworked

	const work = new WorkModel(
		{   name: name,
			occupation:occupation,
			hoursworked: hoursworked})

	try {

		await work.save()
		res.send('data saved')
	} catch(err){
		console.log(err)
	}
})

app.get('/api/read', async(req,res) => {

	WorkModel.find({},(err, result) => {
		
		if(err) {
			res.send(err)
		}
		res.send(result)
	})
})

app.delete("/api/delete/:id", async(req,res) =>{
	const id = req.params.id
	await WorkModel.findByIdAndRemove(id).exec()
	res.send('deleted')
})


// app.put('/api/update', async (req, res) => {
// 	await WorkModel.findOneAndUpdate({
		
// 		updated: req.body.workhours,
		
// 		// updated.save()
		
// 	})


app.put('/api/update', async(req,res) => {
	
	const newHours = req.body.newHours
	const id = req.body.id

	// console.log(req.body.newHours,'and',newHours)
	// console.log(req.body.id,'and',id)
	

	
	try {

		await WorkModel.findById,(id,(err,update) => {


			console.log(update,id,'fff',err)
			// console.log(updatedHours.hoursworked,'and',newHours)
			update.hoursworked = newHours
			// console.log(updatedHours.hoursworked,'and',newHours)	
			update.save()
			res.send('update')


		})

		
	} catch(err){
		console.log(err,'err')
	}
})




const port = process.env.PORT || 5000


app.listen(5000, () => {
	console.log('Server started on 5000')
})

