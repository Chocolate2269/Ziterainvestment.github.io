const SUPABASE_URL = 'https://yalkrylojpuisxpavdeb.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhbGtyeWxvanB1aXN4cGF2ZGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyOTUwODAsImV4cCI6MjEwMTg3MTA4MH0.Dz9N3A8LvAiLmKMOd6psjU2R1PIyl98IZSdmCMSJ7Aw'
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

async function handleAuth() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const msg = document.getElementById('msg')

  if(!email || !password) { msg.style.color='red'; msg.innerText = 'Please enter email and password'; return }

  msg.style.color='#FFD700'; msg.innerText = 'Loading...'
  
  // Try Signup first
  let { data, error } = await supabase.auth.signUp({ email, password })
  
  // If user already exists, Login
  if(error && error.message.includes("already registered")) {
    let result = await supabase.auth.signInWithPassword({ email, password })
    data = result.data
    error = result.error
  }

  if(error) { 
    msg.style.color='red'; msg.innerText = 'Error: ' + error.message 
  } else {
    msg.style.color='lime'; msg.innerText = 'Success! Redirecting...'
    setTimeout(() => window.location.href = 'dashboard.html', 1200)
  }
}

// If already logged in, skip login page
supabase.auth.getSession().then(({ data: { session }}) => {
  if(session) window.location.href = 'dashboard.html'
})
