import { createClient } from '@supabase/supabase-js'


const supabaseUrl = "https://bwdepnzjuqvzreolimzt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZGVwbnpqdXF2enJlb2xpbXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNjk0MzMsImV4cCI6MjAxNzk0NTQzM30.AhDjD5VG3Yvq6G7lhu4Q4E5O48tvDvxEG4ff4JTlD7c"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)