import Adminpanel from "@/components/Adminpanel";
import Header from "../components/Header";
import React from "react";

export default function Admin() {
    return(
        <div className="h-screen w-screen">
            <Header />
            <Adminpanel/>
        </div>
    )
}