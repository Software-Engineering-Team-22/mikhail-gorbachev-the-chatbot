

import { useState } from "react";
import { Routes, Route } from "react-router";

import ConversationButton from "./components/ConversationButton.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import ChatBox from "./components/ChatBox.jsx";


export default function App() {
  const [open, setOpen] = useState(true);
  
  return (
    
      <div className="app-layout">
        <Navbar />
        <ConversationButton
          open={open}
          onClick={()=>setOpen(!open)}
        />
        <ChatBox />
        {/* needs refinement */}
        <h1 style={{color:"#2E302C", fontSize:"20px"}}> Lorem ipsum.. </h1> 
        <Sidebar open={open}/>
        <main>
          <h1>Lorem Ipsum</h1>
        </main>
      </div>
  );
}



