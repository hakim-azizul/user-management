import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json())


const users = [
  {id: 1, name: 'Aziz'},
  {id: 2, name: 'Bziz'},
  {id: 3, name: 'Cziz'},
  {id: 4, name: 'Dziz'},
  {id: 5, name: 'Eziz'},
  {id: 6, name: 'Fziz'},
  {id: 7, name: 'Gziz'},
  {id: 8, name: 'Hziz'},
  {id: 9, name: 'Iziz'}
]

app.get('/', (req, res) => {
  res.send('Users are coming soon!');
});

app.get('/users', (req, res)=>{
  res.send(users)
})

app.post('/users',(req, res)=> {
  console.log(req.body)
  res.send({succes: true, message: "User added"})
})


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});