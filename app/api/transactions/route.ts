import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit");

    let query = supabase.from("transactions").select("*").order("date", { ascending: false });

    if (limit) query = query.limit(Number(limit));

    const { data, error } = await query;
    
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    
    const mapped = data.map((t) => ({
        id: t.id,
        date: t.date,
        description: t.description,
        category: t.category.toLowerCase(),
        type: t.type.toLowerCase(),
        amount: t.amount
    }));

    return NextResponse.json(mapped);
}