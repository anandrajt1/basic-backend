
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

app.use(express.json()) //to acces  the body of req

app.get('/', (req, res) => {
  res.send('Hello world!')
})

//get all products
app.get('/products',async (req, res) => {
  const products= await Product.find({});

    res.json(products)
  })

 //add a product
 app.post('/products',async (req, res) => {
  const data= req.body //take data
  const product= new Product(data)  //create a new doc using this data
  await product.save() //save that doc 
  
    res.json(product) //res send
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const productsSchema = new mongoose.Schema({
  name: String,
  description:String,
  price:Number

});

const Product = mongoose.model('Product', productsSchema);



main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rajanand765:s6TdoUBskwsiN7Sx@cluster0.8ittmlr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}




