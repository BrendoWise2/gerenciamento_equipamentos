import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";


export async function GET() {
    const companies = await companyService.list();

    return NextResponse.json(companies);
}