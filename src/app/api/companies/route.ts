import { createCompanySchema } from "@/modules/companies/company.schema";
import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";
import { ZodError } from "zod";


export async function GET() {
    const companies = await companyService.listAll();

    return NextResponse.json(companies);
}

export async function POST(req: Request) {

    try {

        const body = await req.json();

        const data = createCompanySchema.parse(body);

        const company = await companyService.create(data);

        return NextResponse.json(company, {status: 201});
        
    } catch (error) {
        if(error instanceof ZodError){
            return NextResponse.json(
                {message: "Dados inválidos",
                errors: error.issues,},
                { status: 400 })
        }
        return NextResponse.json({message: "Ocorreu um erro inesperado"}, {status: 500});
    }
    
}