export const sendQuestion = async (data) => fetch('/api/question', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    },
    body: JSON.stringify(data),
}).then((res) => {
    if(!res.ok) {
        console.log("ERRORE IN RISPOSTA AL CLIENT")
        throw new Error("Failed to send email")
    }
    return res.json()
}
)