import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZ3J1aWtseGdzcWR1d2J6aHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NDY1NDUsImV4cCI6MTk4NzAyMjU0NX0.ihtMOkS4hyMYcUVSRb6lFMycfHnlKhBUPXhfL-8ZjTQ"
const SUPABASE_URL = "https://wigruiklxgsqduwbzhrz.supabase.co"
const useSupaBase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

    return {
        supabase,
    }
}

export default useSupaBase