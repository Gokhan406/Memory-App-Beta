import {useState, useEffect} from "react";
import Boxes from "./components/Boxes";
import Header from "./components/Header";

function App() {
  const [boxes,Setboxes] = useState([
    {id:1,durum:"off",foto:"",check:"false"},
    {id:2,durum:"off",foto:"",check:"false"},
    {id:3,durum:"off",foto:"",check:"false"},
    {id:4,durum:"off",foto:"",check:"false"},

    {id:5,durum:"off",foto:"",check:"false"},
    {id:6,durum:"off",foto:"",check:"false"},
    {id:7,durum:"off",foto:"",check:"false"},
    {id:8,durum:"off",foto:"",check:"false"},

    {id:9,durum:"off",foto:"",check:"false"},
    {id:10,durum:"off",foto:"",check:"false"},
    {id:11,durum:"off",foto:"",check:"false"},
    {id:12,durum:"off",foto:"",check:"false"},
    {id:13,durum:"none",foto:"",check:"false"},
  ]);
  const [foto,Setfoto] = useState([
    "daire",
    "dikdörtgen",
    "kare",
    "üçgen",
    "beşgen",
    "yıldız",

    "daire",
    "dikdörtgen",
    "kare",
    "üçgen",
    "beşgen",
    "yıldız",
  ]);

  const [secilebilir,Setsecilebilir] = useState(true);
  const [score,Setscore] = useState(0);
  var random_indexler=[];

  useEffect(() => {
    for(var i=0;i<=11;i++){
      let random = parseInt(Math.random() * 12);
      if(!random_indexler.includes(random)){
        random_indexler.push(random);
      }
      if(random_indexler.length < 12){
        i-=1
      }
    }

    boxes.map(box => {
      if(box.id !== 13){
        Setboxes(boxes[box.id - 1] = {id:box.id,durum:"off",foto:foto[random_indexler[box.id - 1]],check:"false"})
      }
      else{
        Setboxes([...boxes])
      }
    })
  },[])

  const kontrol_et = () => {
    var secilenler = [];
    boxes.map(box => {
        if(box.durum === "on" && box.check === "false"){
          secilenler.push(box.id - 1)
        }
    })

    if((secilenler.length === 2) && (boxes[secilenler[0]].foto === boxes[secilenler[1]].foto)){
      Setscore(score+1)
      secilenler = []
    }

    else if((secilenler.length === 2) && (boxes[secilenler[0]].foto !== boxes[secilenler[1]].foto)){
        boxes.map(box => {
            if(box.durum === "on"){
              Setboxes(boxes[box.id - 1] = {id:box.id,durum:"off",foto:box.foto,check:"false"})
            }
            else{
              Setboxes([...boxes])
            }
        })
      secilenler=[]
    }
    Setsecilebilir(true) ///
  }

  const setdurum = (element) => {
    let secilenler = []
    boxes.map(box => {
      if(box.id !== element.id){
        Setboxes([...boxes])
      }
      if(box.id === element.id){
        if(element.durum === "off" && secilebilir===true){
          Setboxes(boxes[element.id - 1] = {id:box.id,durum:"on",foto:box.foto,check:"false"})
          setTimeout(kontrol_et, 1000);
        }
      }
      if(box.durum === "on" && box.check === "false"){
        secilenler.push(box.id);
      }
      if(secilenler.length === 1){
        Setsecilebilir(false) ///
        secilenler = []
      }
    })
  }

  return(
    <div className="App">
      <Header skor={score}/>
      <Boxes boxes={boxes} setdurum={setdurum}/>
    </div>
  );
}

export default App;