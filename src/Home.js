import axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        fetch('https://github.com/aaronwitherspoon/demo/blob/master/db2.json')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                console.log(data);
            })
    }, []);

    return ( 
        <div className="home">
            
        </div>
     );
}
 
export default Home;