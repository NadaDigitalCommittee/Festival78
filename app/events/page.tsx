"use client";

import { useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        if (!id) return;
    }, [id])
    return (
        <main>

        </main>
    )
}