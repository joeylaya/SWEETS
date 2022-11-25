import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lwzyhpymfyrhbzaowygj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3enlocHltZnlyaGJ6YW93eWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMzAxNzksImV4cCI6MTk4MzcwNjE3OX0.P7aZ9gPV6YBDwg1veiqBGAbysRG9xxq8Y2eQR2HBVhM"
export const supabase = createClient(supabaseUrl, supabaseKey)
