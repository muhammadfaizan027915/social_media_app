import React from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-row h-svh">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <hr />
                <section className="p-4">{children}</section>
            </div>
        </main>
    );
}

export default DashboardLayout;
