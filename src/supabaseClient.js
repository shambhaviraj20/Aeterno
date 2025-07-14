// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pspxxwjqntizaqxpmvfi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzcHh4d2pxbnRpemFxeHBtdmZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDQyMjUsImV4cCI6MjA2ODA4MDIyNX0.ZSQ7lGi-uhLdYNHwzNwyd9G6uGeDJC-Ka6DN5aQl1is';
export const supabase = createClient(supabaseUrl, supabaseKey);
