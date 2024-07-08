import React from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-row">
            <div className="fixed top-0 left-0 w-72 ">
                <Sidebar />
            </div>
            <div className="absolute left-72 w-[calc(100%-18rem)]  flex-1">
                <div className="sticky top-0">
                    <Header />
                    <hr />
                </div>
                <section className="p-4">{children}</section>
            </div>
        </main>
    );
}

export default DashboardLayout;
