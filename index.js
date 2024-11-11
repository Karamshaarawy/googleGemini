const {GoogleGenerativeAI}=require("@google/generative-ai")
require("dotenv").config()

const genAI= new GoogleGenerativeAI(process.env.API_KEY)


async function runModel(){
    const model=genAI.getGenerativeModel({model:"gemini-1.5-flash"})
    const chat=model.startChat({
        history:[
            {
                role:"user",
                parts:[{text:"Hello. I have 2 dogs in my house"}]
            },
            {
                role:"model",
                parts:[{ text:"Great to meat you. What would you like to know?"}]
            }
        ]
    })

    

    const msg="how many paws are in my house"

    const result=await chat.sendMessage(msg)
    const response=result.response
    const text=response.text()
    console.log(text)

}

runModel()