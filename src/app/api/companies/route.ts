import { createCompanySchema } from "@/modules/companies/company.schema";
import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";


export async function GET() {
    const companies = await companyService.listAll();

    return NextResponse.json(companies);
}

export async function POST(req: Request) {

    const body = await req.json();

    const data = createCompanySchema.parse(body);

    const company = await companyService.create(data);

    return NextResponse.json(company, {status: 201});
}