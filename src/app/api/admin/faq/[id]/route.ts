import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const cks = cookies();
        const body = await request.json();

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/faq/${params.id}`, {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + cks.get('access_token')?.value,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body),
        });
        const resData = await res.json();

        return NextResponse.json({ data: resData });
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const cks = cookies();

        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/admin/faq/${params.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + cks.get('access_token')?.value,
            },
        });
        const resData = await res.json();

        return NextResponse.json({ data: resData });
    } catch (error) {
        return NextResponse.json(error);
    }
}
