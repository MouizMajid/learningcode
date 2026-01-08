const eventSource = new EventSource("/api/news") 

const liveContainer = document.getElementById("live-container")
console.log("news js running")

// Handle live price updates 
eventSource.onmessage = (event) => {
    console.log("message gotten on event source")
  const data = JSON.parse(event.data)
  const story = data.story
  liveContainer.textContent = story
}

// Handle connection loss
eventSource.onerror = () => {
  console.log("Connection lost. Attempting to reconnect...")
}

