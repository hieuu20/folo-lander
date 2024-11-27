import { NextRequest } from "next/server";
import { AgencyContactService } from "./_service/agencyContactService";


export async function POST(request: NextRequest){
    const body = await request.json();
    const agencyContactService = new AgencyContactService();

    return agencyContactService.createAgencyContact(body);
}