require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

async function sendTemplateMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/679365315249435/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '918895203112',
            type: 'template',
            template:{
                name: 'hello_world',
                language: {
                    code: 'en_US'
                },
                /*components: [
                    {
                        type: 'header',
                        parameters: [
                            {
                                type: 'text',
                                text: 'John Doe'
                            }
                        ]
                    },
                    {
                        type: 'body',
                        parameters: [
                            {
                                type: 'text',
                                text: '50'
                            }
                        ]
                    }
                ]*/
            }
        })
    })

    console.log(response.data)
}


async function sendTextMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/679365315249435/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '918895203112',
            type: 'text',
            text:{
                body: 'This is a text message'
            }
        })
    })

    console.log(response.data) 
}

async function sendMediaMessage() {
    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/679365315249435/messages',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            messaging_product: 'whatsapp',
            to: '918895203112',
            type: 'image',
            image:{
                //link: 'https://dummyimage.com/600x400/000/fff.png&text=manfra.io',
                //id: '3567778406856428',
                caption: 'This is a media message'
            }
        })
    })

    console.log(response.data)    
}

async function uploadImage() {
    const data = new FormData()
    data.append('messaging_product', 'whatsapp')
    data.append('file', fs.createReadStream(process.cwd() + '/logo.png'), { contentType: 'image/png' })
    data.append('type', 'image/png')

    const response = await axios({
        url: 'https://graph.facebook.com/v22.0/679365315249435/media',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`
        },
        data: data
    })

    console.log(response.data)     
}

// sendTemplateMessage()

// sendTextMessage()

// sendMediaMessage()

 //uploadImage()