import "../styles/profile.css"

import React, { Component, useRef, useState, useEffect  } from 'react';
import ReturnArrow from "../icons/down-arrow-blue.png"
import {database, firestore} from "../firebase";
import { getDatabase, ref, onValue} from "firebase/database";
import Button from 'react-bootstrap/Button';
import { useNavigate  } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { getAuth } from "firebase/auth";


function Profile() {
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [userFirst, setFirstName] = useState("");
    const [userLast, setLastName] = useState("");
    const [userPassword, setPassword] = useState("");
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q6, setQ6] = useState("");
    const [q7, setQ7] = useState("");
    const [q8, setQ8] = useState("");
    const [q9, setQ9] = useState("");
    const [q10, setQ10] = useState("");
    const [q11, setQ11] = useState("");


    
    
    useEffect(() => {
        const db = getDatabase();
        const userFirstRef = ref(db, 'users/' + user.uid + '/firstname');
        const userLastRef = ref(db, 'users/' + user.uid + '/lastname');
        const userPasswordRef = ref(db, 'users/' + user.uid + '/password');
        const userQ1Ref = ref(db, 'users/' + user.uid + '/CIA Quiz');
        const userQ2Ref = ref(db, 'users/' + user.uid + '/Browser Quiz');
        const userQ3Ref = ref(db, 'users/' + user.uid + '/Tor Quiz');
        const userQ4Ref = ref(db, 'users/' + user.uid + '/Password Handling Quiz');
        const userQ5Ref = ref(db, 'users/' + user.uid + '/Anti-Virus Quiz');
        const userQ6Ref = ref(db, 'users/' + user.uid + '/Encryption Quiz');
        const userQ7Ref = ref(db, 'users/' + user.uid + '/Malware Quiz');
        const userQ8Ref = ref(db, 'users/' + user.uid + '/Reality of Security Quiz');
        const userQ9Ref = ref(db, 'users/' + user.uid + '/Keys Quiz');
        const userQ10Ref = ref(db, 'users/' + user.uid + '/Machine Learning Quiz')
        const userQ11Ref = ref(db, 'users/' + user.uid + '/Multi-Factor Quiz');;

        onValue(userFirstRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          if (userFirst === "") { 
            setFirstName(data);
          }
        });
        onValue(userLastRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (userLast === "") { 
                setLastName(data);
            }
          });
        onValue(userPasswordRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (userPassword === "") { 
                setPassword(data);
            }
        });
        onValue(userQ1Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q1 === "") { 
                setQ1(data);
            }
        });
        onValue(userQ2Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q2 === "") { 
                setQ2(data);
            }
        });
        onValue(userQ3Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q3 === "") { 
                setQ3(data);
            }
        });
        onValue(userQ4Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q4 === "") { 
                setQ4(data);
            }
        });
        onValue(userQ5Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q5 === "") { 
                setQ5(data);
            }
        });
        onValue(userQ6Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q6 === "") { 
                setQ6(data);
            }
        });
        onValue(userQ7Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q7 === "") { 
                setQ7(data);
            }
        });
        onValue(userQ8Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q8 === "") { 
                setQ8(data);
            }
        });
        onValue(userQ9Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q9 === "") { 
                setQ9(data);
            }
        });
        onValue(userQ10Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q10 === "") { 
                setQ10(data);
            }
        });
        onValue(userQ11Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (q11 === "") { 
                setQ11(data);
            }
        });
      }, [userFirst,userLast,userPassword, user.uid]);


    const logoutUser = async () => {
      try{
        await logout();
        navigate("/");
        console.log("You are logged out!");
      }catch (e){
        console.log(e.message);
      }
  
    }
    
    /*const starCountRef = ref(db, 'users/' + postId + '/starCount');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
    });*/
    return (
        <div fluid className="profile-body">
            <div className="profile-main-container">
                <div className="profile-header">
                    <div className="profile-return">
                        <a href="/">
                            <img  src={ReturnArrow}/>
                        </a>
                    </div>
                    <div className="profile-name">
                        {userFirst + " " + userLast}
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info-title">User Information</div>
                    <div className="profile-info-holder">
                        <div className="profile-info-text"><p>{user ? "Email: " + user.email : "Error: No one logged in!"}</p></div>
                        <div className="profile-info-text"><p>{"Password: " + userPassword}</p></div>
                    </div>
                </div>
                <div className="profile-scores">
                    <div className="profile-info-title">Scores</div>
                    <div className="profile-score-title">{"CIA: " + (q1 == -1 ? "Not Yet Taken" : q1 )}</div>
                    <div className="profile-score-title">{"Browser: " + (q2 == -1 ? "Not Yet Taken" : q2 )}</div>
                    <div className="profile-score-title">{"Tor: " + (q3 == -1 ? "Not Yet Taken" : q3 )}</div>
                    <div className="profile-score-title">{"Password Handling: " + (q4 == -1 ? "Not Yet Taken" : q4 )}</div>
                    <div className="profile-score-title">{"Anti-Virus: " + (q5 == -1 ? "Not Yet Taken" : q5 )}</div>
                    <div className="profile-score-title">{"Encryption: " + (q6 == -1 ? "Not Yet Taken" : q6 )}</div>
                    <div className="profile-score-title">{"Malware: " + (q7 == -1 ? "Not Yet Taken" : q7 )}</div>
                    <div className="profile-score-title">{"Reality of Security: " + (q8 == -1 ? "Not Yet Taken" : q8 )}</div>
                    <div className="profile-score-title">{"Keys: " + (q9 == -1 ? "Not Yet Taken" : q9 )}</div>
                    <div className="profile-score-title">{"Machine Learning: " + (q10 == -1 ? "Not Yet Taken" : q10 )}</div>
                    <div className="profile-score-title">{"Multi-Factor: " + (q11 == -1 ? "Not Yet Taken" : q11 )}</div>
                    

                </div>
                    <Button className="profile-logout-button" onClick={logoutUser}>Logout</Button>
            </div>
        </div>
    )
}

export default Profile

