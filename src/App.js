import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { UserComponent } from "./components/UserComponent";
import { StudentRegister } from "./components/StudentRegister";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Company } from "./components/Company";
import { Country } from "./components/Country";
import { ContactUs } from "./components/ContactUs";
import { Director } from "./components/Director";
import { ApiDemo1 } from "./components/ApiDemo1";
import { ApiDemo2 } from "./components/ApiDemo2";

function App() {
  var title = "USER APPLICATION";
  // var name = "Ajay";
  // var age = 25;
  // var isMale = true;
  // var marks = 8.9;

  // var user = {
  //   name: "Amit",
  //   age: 28,
  // };

  // var persons = [
  //   {
  //     id:1,
  //     name:"Parth"
  //   },{
  //     id:2,
  //     name:"Priya"
  //   }
  // ]

  return (
    // <div className="App">
    //   <Header />
    //   <div style={{backgroundColor:"grey"}}>
    //     <h1>HELlo</h1>
    //     {name}
    //     <h1>{name}</h1>
    //     <h2>AGE = {age}</h2>
    //     <p>Marks = {marks}</p>
    //     <h3>{isMale}</h3>
    //     <h3>{isMale == true ? "Male" : "Female"}</h3>
    //     <h4>{isMale ? "male" : "female"}</h4>
    //     {user.name}
    //     {user.age}
    //   </div>

    //   <div>
    //     <h1>Persons</h1>
    //     {
    //       persons.map((per)=>{
    //         return(
    //           <div>
    //             <h1>{per.id}</h1>
    //             <h2>{per.name}</h2>
    //             </div>
    //         )
    //       })
    //     }

    //   </div>


    //   <table className="table table-dark">
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th>Name</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
    //         persons.map((per)=>{
    //           return(<tr>
    //             <td>{per.id}</td>
    //             <td>{per.name}</td>
    //           </tr>)
    //         })
    //       }
    //     </tbody>

    //   </table>




    //   <Footer />
    // </div>
    <div className="App">

        {/* <UserComponent apptitle = {title}/> */}
        {/* <StudentRegister/> */}
        <Navbar/>
        <Routes>
          <Route path ="/home" element={<Home/>}></Route>
          <Route path ="/aboutus" element={<AboutUs/>}></Route>
          <Route path ="/aboutus/company" element= {<Company/>}></Route>
          <Route path ="/aboutus/country" element = {<Country/>}></Route>
          <Route path ="/contactus" element={<ContactUs/>}></Route>
          <Route path ="/contactus/director/:id" element ={<Director/>}></Route>
          <Route path ="/apidemo1" element={<ApiDemo1></ApiDemo1>}></Route>
          <Route path="/apidemo2" element = {<ApiDemo2/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
