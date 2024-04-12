"use client"
import { useSession } from "next-auth/react";


function DashboardPage(){
    const {data: session, status} = useSession();
    console.log(session, status);
    return (
        <div>DahsboardPAge</div>
    )
}

export default DashboardPage;