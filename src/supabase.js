import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pjsojklxqrhiketqsxor.supabase.co'
const supabaseKey = 'sb_publishable_wTWo3twRkc4V9ze49pAJTQ_t1R5xNMz'

export const supabase = createClient(supabaseUrl, supabaseKey)
