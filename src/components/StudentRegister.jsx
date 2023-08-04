import React from 'react'
import { useForm } from 'react-hook-form';

export const StudentRegister = () => {

    //register is an array of objects
    //handleSubmit is a function
    const {register, handleSubmit,formState:{errors}} = useForm(
        {
            mode:"onChange"
        }
    );

    console.log("error....",errors);
    const submitHandler = (data) => {
        console.log(data);
    }
    const validationSchema = {
        fname:{
            required:{
                value:true,
                message:"First Name is required"
            }
        },
        lname:{
            required:{
                value:true,
                message:"Last Name is required"
            },
            minLength:{
                value:3,
                message:"Last Name should be minimum 3 characters"
            }
        },
        gender:{
            required:{
                value:true,
                message:"gender is required"
        }
    }
    }

  return (
    <div>
        <h1>STUDENT REGISTRATION</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name</label>
                <input type="text" {...register("fname",validationSchema.fname)}></input>
                {errors.fname && <p>{errors.fname.message}</p>}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...register("lname",validationSchema.lname)}></input>
                {errors.lname && <p>{errors.lname.message}</p>}
            </div>
            <div>
                <label>Gender</label>
                <br></br>
                MALE :<input type="radio" value="male" name="gender" {...register("gender",validationSchema.gender)} ></input>
                <br></br>
                FEMALE :<input type="radio" value="female" name="gender" {...register("gender",validationSchema.gender)}></input>
                    {errors.gender && <p>{errors.gender.message}</p>}
            </div>
            <div>
                <label>Skills</label>
                <br></br>
                <input type="checkbox" value="java" {...register("skills")}></input>Java
                <input type="checkbox" value="react" {...register("skills")}></input>React
                <input type="checkbox" value="angular" {...register("skills")}></input>Angular
            </div>
            <div>Stream</div>
            <select {...register("stream")}>
                <option value="cse">CSE</option>
                <option value="ece">ECE</option>
                <option value="eee">EEE</option>
            </select>
            <div>
                <input type="submit" value="Submit"></input>
            </div>
        </form>

    </div>
  )
}
