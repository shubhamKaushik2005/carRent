const express = require('express')
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

let data = [
    {

        "id": "1",
        "src": "/images/s1.jpg",
        "heading": "Toyota Supra",
        "desc": "A legendary Japanese sports car known for its powerful turbocharged engine and sharp handling.",
        "price": 43000
    },
    {
        "id": "2",
        "src": "/images/s2.jpg",
        "heading": "Ford Mustang",
        "desc": "An iconic American muscle car with a bold design and thrilling V8 performance.",
        "price": 39000
    },
    {
        "id": "3",
        "src": "/images/s3.jpg",
        "heading": "Chevrolet Camaro",
        "desc": "A classic American performance car offering aggressive styling and strong engine options.",
        "price": 37000
    },
    {
        "id": "4",
        "src": "/images/s4.jpg",
        "heading": "BMW M8",
        "desc": "A high-performance version of the BMW M8 Series, blending luxury and dynamic driving.",
        "price": 72000
    },
    {
        "id": "5",
        "src": "/images/s5.jpg",
        "heading": "Audi R8",
        "desc": "A premium supercar with a V10 engine, stunning design, and Quattro all-wheel drive.",
        "price": 145000
    },
    {
        "id": "6",
        "src": "/images/s6.jpg",
        "heading": "Nissan GT-R",
        "desc": "A high-tech powerhouse known as 'Godzilla', offering blistering acceleration and advanced AWD.",
        "price": 115000
    },
    {
        "id": "7",
        "src": "/images/s7.jpg",
        "heading": "Ferrari 488 GTB",
        "desc": "A stunning Italian supercar with a twin-turbo V8, delivering breathtaking performance and razor-sharp handling.",
        "price": 265000
    },
    {
        "id": "8",
        "src": "/images/s8.jpg",
        "heading": "McLaren 720S",
        "desc": "A cutting-edge British supercar, ultra-light with a twin-turbo V8 and active aerodynamics for exhilarating track and road performance.",
        "price": 310000
    },
    {
        "id": "9",
        "src": "/images/s9.jpg",
        "heading": "Porsche 911 Turbo S",
        "desc": "A versatile high-performance machine offering daily drivability with blistering acceleration and iconic precision.",
        "price": 215000
    },
    {
        "id": "10",
        "src": "/images/s10.jpg",
        "heading": "Chevrolet Corvette Z06",
        "desc": "A bold American sports car with a supercharged V8, race-ready chassis, and unmistakable muscle car presence.",
        "price": 118000
    }
]


app.get('/', (req, res) => {
    res.json(data);
})

app.post('/', (req, res) => {
    data.push({ id: req.body.id, src: req.body.src, heading: req.body.heading, desc: req.body.desc, price: req.body.price })
    res.send('record successfuly added!');
})

app.put('/user', (req, res) => {
    res.send('this is put req');
})

app.delete('/user', (req, res) => {
    res.send('this is delete req');
})

app.listen(port, () => console.log(`server running on port ${port}`));