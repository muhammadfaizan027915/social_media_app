"use client";

import { useEffect } from "react";

type GlobalErrorProps = { error: Error & { digest?: string }; reset: () => void };

function GlobalError({ error, reset }: GlobalErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>Try again</button>
            </body>
        </html>
    );
}

export default GlobalError;
