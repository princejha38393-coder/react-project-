import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

function User_login() {

    //     const [xyz,abc] = useState(500);
    //     const [one,two] = useState({name:"ravi",age:20,phone:"545454"});
    //     const mymsg = ()=>{
    //         abc("update value");
    //         two({name:"mohan",age:80,phone:"777777777"})
    //     }

    //     const [a,b]=useState("username");

    //     const userinput = (u)=>{
    //         console.log(u);
    //         b(u.target.value);
    //     }

    // const name="kumar";  
    const mynav = useNavigate();
    const [email, updatemail] = useState("");
    const [pass, updatepass] = useState("");


    const changeemail = (e) => {
        updatemail(e.target.value);
    }

    const changepass = (e) => {
        updatepass(e.target.value);
    }

    const Myformsubmit = () => {
        if (email === "" || pass === "") {
            toast.error("email and password required",{position:"top-left",theme:'dark'});
        }
        else {
            toast.success("welcome to dashboard",{position:"top-left",theme:'dark',autoClose:2000});
            localStorage.setItem("userpass",JSON.stringify({jemail:email,jpass:pass}));
            setTimeout(() => {
                mynav("/dashboard");
            }, 2000);

        }
    }




    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 bg-light shadow p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="h2">Sign In</p>
                                <ToastContainer/>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"> <MdOutlineEmail /> Email address</label>
                                    <input type="email" className="form-control" value={email} onInput={changeemail} />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label"><TbLockPassword /> Password</label>
                                    <input type="password" className="form-control" value={pass} onInput={changepass} />
                                </div>
                            </div>

                            <div className="col-md-12 text-center">
                                <div className="mb-3">
                                    <input type="button" className="btn btn-success" value="login" onClick={Myformsubmit} />
                                    <input type="reset" className="btn btn-danger ms-2" value="cancel" />
                                    <Link to="registor">new user</Link>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User_login