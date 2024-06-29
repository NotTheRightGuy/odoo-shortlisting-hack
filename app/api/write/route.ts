import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';

import { createClient } from '@supabase/supabase-js'
import { Database } from '@/database.types'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)


export async function GET(request:any, response:any) {
    try {
        const { data, error } = await supabase
        .from('USER_DETAILS')
        .select()
    
        if (error) {
            console.error(error)
            return
            }
        console.log(data)
        return NextResponse.json(data);

    }
    catch (err) {
        return NextResponse.error();
    }
}
