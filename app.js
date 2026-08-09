// app.js - Ziterainvestment
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// 1. PUT YOUR SUPABASE DETAILS HERE
const SUPABASE_URL = 'https://your-project-ref.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGc...' // your anon public key
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
