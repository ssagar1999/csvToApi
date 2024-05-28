const mongoose = require('mongoose'); 


const studentSchema = new mongoose.Schema({ 
	Name: { 
		type: String, 
		
	}, 
	Email: { 
		type: String, 
		
	}, 
	Score: { 
		type: String, 
	}, 

}) 

const Student = new mongoose.model("Student", studentSchema)
