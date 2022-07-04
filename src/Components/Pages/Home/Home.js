import React,{useState,useEffect} from 'react';
import "./Home.css";
import User from "../../ui/User";
import axios from "../../../axios";
const Home = () =>{
    const [query,setQuery]=useState("");
    const [users,setUsers]=useState([]);
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(10);

    const handleQueryInput = (e)=>{
        setQuery(e.target.value);
    }
    const handlePrevPage=()=>{
        setPage(page=>{
            if(page===1) return page;
            else return page-1;
        });
    }
    const handleNextPage=()=>{
        setPage(page=> page+1);
    }
    const handlePageLimit=(e)=>{
        const value=e.target.value;
        setLimit(parseInt(value));
    }
    const fetchUsers = async()=>{
        try{

            const {data}=await axios.get("search/users?q="+query,{
                params:{
                    page,
                    per_page:limit

                }
            });
            return data?.items;
        }
        catch (error){
                console.log(error);
                return null;
        }

    }
    const handleSearchUsers = async (e)=>{
        e.preventDefault();
        if(query){
            const items=await fetchUsers();
            setUsers(items);

        }
        else{
            console.log("Your query is empty");
        }
    }
    useEffect(()=>{
        const displayUsersOnChange=async ()=>{
            if(query)
            {
                const items=await fetchUsers();
                setUsers(items);
            }
        }
        displayUsersOnChange().then();
        console.log(users);
    },[page,limit])
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark text-white text-lg-center">
                <h4>Welcome to Github Search Application</h4>
            </nav>
            <div className="container">

                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card search-form bg-dark text-white" >
                                    <div className="card-header ">
                                        <h4>Github Search User</h4>


                                    </div>
                                    <div className="card-body">
                                        <form action="" className="form">
                                            <input type="text" value={query} onChange={handleQueryInput} placeholder="username" className="form-control"/>
                                            <br/>



                                            <button className="btn btn-primary" onClick={handleSearchUsers}> Search </button>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="search-results">
                    <div className="more-options">
                        <label htmlFor="">
                            <small>per Page</small>
                            <select name="" id="" onChange={handlePageLimit}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </label>
                        <div className="pagination">
                            <button onClick={handlePrevPage}>{page}</button>
                            <button onClick={handleNextPage}>{page+1}</button>

                        </div>

                    </div>

                    {users?users.map(user=>{
                        return <User user={user} key={user.id}/>
                    }):<h2>There is nothing to display</h2>}


                </div>

            </div>
        </React.Fragment>



    );



};

export default Home;