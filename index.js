const {GoogleGenerativeAI}=require("@google/generative-ai")
require("dotenv").config()
const genAI= new GoogleGenerativeAI(process.env.API_KEY)


async function modelRun(){

    const model=genAI.getGenerativeModel({model:"gemini-1.5-flash"})

    const prompt="اكتب قصة عن ارنب صغير"

   const result=await model.generateContent(prompt)
   const response=result.response
   const text=response.text()

   console.log(text)

}

modelRun()