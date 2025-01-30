'use client'

export async function checkFirstVisit() {
    const hasVisited = sessionStorage.getItem("hasVisited") === "true";
    
    if (!hasVisited) {
        sessionStorage.setItem("hasVisited", "true");
    }
    
    return !hasVisited;
}
