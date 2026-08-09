import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 1. YOUR SUPABASE DETAILS
const SUPABASE_URL = 'https://gnirwxegxvujdimwpxyr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduaXJ3eGVneHZ1amRpbXdweXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMjgwODcsImV4cCI6MjEwMTgwNDA4N30.0MdYpV1poixDu02H1A1_GomnHN3oUSV5__ZVY1QGKzI'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const GITHUB_PATH = 'https://chocolate2269.github.io/Ziterainvestment.github.io'

// 2. SIGN UP FUNCTION
window.signUp = async function() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${GITHUB_PATH}/dashboard.html`
    }
  })

  if (error) {
    alert('Signup Error: ' + error.message)
    console.log(error)
  } else {
    alert('Account created! Redirecting...')
    // If email confirm is OFF in Supabase, this will work instantly
    window.location.href = `${GITHUB_PATH}/dashboard.html`
  }
}

// 3. LOGIN FUNCTION  
window.login = async function() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({email, password})

  if (error) {
    alert('Login Error: ' + error.message)
  } else {
    window.location.href = `${GITHUB_PATH}/dashboard.html`
  }
}

// 4. LOGOUT FUNCTION
window.logout = async function() {
  await supabase.auth.signOut()
  window.location.href = `${GITHUB_PATH}/index.html`
}

// 5. CHECK IF USER IS LOGGED IN ON DASHBOARD
window.checkUser = async function() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    window.location.href = `${GITHUB_PATH}/index.html`
  }
}
