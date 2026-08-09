// 1. YOUR SUPABASE KEYS
const SUPABASE_URL = 'https://yalkrylojpuisxpavdeb.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbGtyeWxvanB1aXN4cGF2ZGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyOTUwODAsImV4cCI6MjEwMTg3MTA4MH0.Dz9N3A8LvAiLmKMOd6psjU2R1PIyl98IZSdmCMSJ7Aw'
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

// 2. SIGNUP / LOGIN BUTTON
document.querySelector('button').addEventListener('click', async () => {
  const email = document.querySelector('input[type="email"]').value
  const password = document.querySelector('input[type="password"]').value

  if(!email || !password) {
    alert('Please enter email and password')
    return
  }

  // Try to signup
  let { data, error } = await supabase.auth.signUp({ email, password })
  
  // If already signed up, just login
  if(error && error.message.includes("already registered")) {
    let result = await supabase.auth.signInWithPassword({ email, password })
    data = result.data
    error = result.error
  }

  if(error) { 
    alert('Error: ' + error.message) 
  } else {
    // Success - go to dashboard
    window.location.href = 'dashboard.html'
  }
})
