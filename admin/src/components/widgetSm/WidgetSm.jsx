import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
      const getUsers = async () => {
        try {
          const res = await axios.get("/users?new=true", {
              headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            }
          })
          console.log(res.data)
          setNewUsers(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      getUsers()
  }, [])
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((newUser, i) => (
          <li key={i} className="widgetSmListItem">
            <img
              src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{newUser.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
