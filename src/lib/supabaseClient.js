import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyzcgzfdfdtbswkxqepe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5emNnemZkZmR0YnN3a3hxZXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTkxMzgsImV4cCI6MjA2MDU3NTEzOH0.QquIVYJ0w0SV5_No_vTHdfdqs3Ps7O0zQMf4GL59htM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
