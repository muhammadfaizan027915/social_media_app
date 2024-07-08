import React from "react";

function FeedLayout({ post, children }: { post: React.ReactNode; children: React.ReactNode }) {
    return (
        <>
            <div className="max-w-[798px] mx-auto">{children}</div>
            <div>{post}</div>
        </>
    );
}

export default FeedLayout;
