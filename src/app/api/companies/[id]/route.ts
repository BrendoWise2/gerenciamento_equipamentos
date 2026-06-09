import { updateCompanySchema } from "@/modules/companies/company.schema";
import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";




export async function GET(req: Request, context: { params: { id: string } }) {

    const { id } = await context.params;

    const company = await companyService.listById(id);

    if(!company){
        return NextResponse.json(
            {message: "Empresa não encontrada"},
            {status: 404}
        );
    }

    return NextResponse.json(company, { status: 200 });

}

export async function PATCH(req: Request, context: {params: Promise<{id: string}>}) {
    const {id} = await context.params;
    const body = await req.json();
    const data = updateCompanySchema.parse(body);
    const company = await companyService.edit(id, data);

    return NextResponse.json(company, {status: 200});
}