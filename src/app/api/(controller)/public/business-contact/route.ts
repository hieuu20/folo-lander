import { NextRequest } from "next/server";
import { BusinessContactService } from "./_service/businessContactService";


export async function POST(request: NextRequest){
    const body = await request.json();
    const businessContactService = new BusinessContactService();

    return businessContactService.createBusinessContact(body);
}