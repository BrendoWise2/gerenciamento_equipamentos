import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";




export async function GET(req: Request, context: { params: { id: string } }) {

    const { id } = await context.params;

    const company = await companyService.listById(id);

    return NextResponse.json(company, { status: 202 });

}