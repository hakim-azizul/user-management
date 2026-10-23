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
  {roll: 1, name: 'Aziz'},
  {roll: 2, name: 'Bziz'},
  {roll: 3, name: 'Cziz'},
  {roll: 4, name: 'Dziz'},
  {roll: 5, name: 'Eziz'},
  {roll: 6, name: 'Fziz'},
  {roll: 7, name: 'Gziz'},
  {roll: 8, name: 'Hziz'},
  {roll: 9, name: 'Iziz'}
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