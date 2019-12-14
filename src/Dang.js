import "./App.css";

export function AppDang() {
  const [nn, setNumber] = useState("");
  const [aa, setAA] = useState({
    num: [],
    result: 0
  });

  const handleAct = a => {
    console.log(!isNaN(a), a);
    if (a === "=") {
      setAA({ num: aa.num.concat(nn) });
      if (aa.num[1] === "+") {
        // console.log(aa.num[0], aa.num[2], aa.num[0] + aa.num[2])
        setNumber(aa.num[0] + nn);
      } else if (aa.num[1] === "-") setNumber(aa.num[0] - aa.num[2]);
    } else {
      if (!isNaN(a)) setNumber(Number(String(nn) + a));
      else {
        setAA({ num: aa.num.concat([nn, a]) });
        setNumber("");
      }
    }
    // setAA({ num: aa.num.concat(a) })
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log("aaaa", aa.num);
    console.log("nn", nn);
  });
  return (
    <div className="App">
      <button onClick={() => handleAct(1)}>1</button>
      <button onClick={() => handleAct(2)}>2</button>
      <button onClick={() => handleAct(3)}>3</button>
      <button onClick={() => handleAct("+")}>+</button>
      <button onClick={() => handleAct("-")}>-</button>
      <button onClick={() => handleAct("=")}>=</button>
    </div>
  );
}

export default App;
