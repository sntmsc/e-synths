import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://yosoohtkackqwpmtagee.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvc29vaHRrYWNrcXdwbXRhZ2VlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY0ODk4MjksImV4cCI6MTk2MjA2NTgyOX0.Vmb2z31FQALNxCKCcrdebd-gEb0rWi1hG5hwOH1A3W8"
)