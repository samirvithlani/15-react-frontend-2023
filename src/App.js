import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  var name = "Ajay";
  var age = 25;
  var isMale = true;
  var marks = 8.9;

  var user = {
    name: "Amit",
    age: 28,
  };

  return (
    <div className="App">
      <Header />
      <div style={{backgroundColor:"grey"}}>
        <h1>HELlo</h1>
        {name}
        <h1>{name}</h1>
        <h2>AGE = {age}</h2>
        <p>Marks = {marks}</p>
        <h3>{isMale}</h3>
        <h3>{isMale == true ? "Male" : "Female"}</h3>
        <h4>{isMale ? "male" : "female"}</h4>
        {user.name}
        {user.age}
      </div>
      <Footer />
    </div>
  );
}

export default App;
