const {GoogleGenerativeAI}=require("@google/generative-ai")
require ("dotenv").config()
const fs=require("fs")

const genAI=new GoogleGenerativeAI(process.env.API_KEY)

function fileToGenerativePart(path,mimeType){
    return{
        inlineData:{
            data:Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        }
    }
}

async function modelRun() {
    const model=genAI.getGenerativeModel({model:"gemini-1.5-flash"})
    const prompt="اوصف كل صورة"
    const imageParts=[fileToGenerativePart("images/images.png","image/png"),fileToGenerativePart("images/images.webp","image/webp")]

    const result=await model.generateContent([prompt,...imageParts])
    const response=result.response
    const text=response.text()
    console.log(text)
}

modelRun()