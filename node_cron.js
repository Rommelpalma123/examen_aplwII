const axios = require('axios').default;
const { index } = require('./models/indexx')
const mongoose = require('mongoose');
const node_cron = require('node-cron');
const cheerio = require('cheerio');
node_cron.schedule('*/2 * * * *', async () => 
{
    try {

        const html = await axios.get("http://localhost:5002/")
        const $ = cheerio.load(html.data)
        const title =  $(".form-group")

        let arrayNews = [];
    // realizamos el recorrido de cada uno de los titulos de la pagina que estan en news__title 
    title.each( async ( index,element ) => {

        // creamos un arreglo para guardar esa informacion y enviarla a la base de datos 
        const Newss =
        { 
            title:  $(element).text()
        }
    
        arrayNews = [...arrayNews, Newss] 
    });
    index.create(arrayNews)
    } catch (error) {
        
        console.log(error);

    }
})