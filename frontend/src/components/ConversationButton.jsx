import ButtonTemplate from "./ButtonTemplate.jsx";
import { useState } from "react";

export default function ConversationButton({ open, onClick }) {
    
    

    return (
        <ButtonTemplate
        className = {`ConversationButton ${open ? "open" : "closed"}`}
        text={open ? "< Conversation" : "Conversation >"}
        onClick={onClick}
        />
    )
    
}