import { updateCompanySchema } from "@/modules/companies/company.schema";
import { companyService } from "@/modules/companies/company.service";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    const { id } = await context.params;

    const company = await companyService.listById(id);

    if (!company) {
      return NextResponse.json(
        { message: "Empresa não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(company, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ocorreu um erro inesperado" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const body = await req.json();

    const data = updateCompanySchema.parse(body);

    const company = await companyService.edit(id, data);

    return NextResponse.json(company, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Dados inválidos",
          errors: error.issues,
        },
        { status: 400 }
      );
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json(
        { message: "Empresa não encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Ocorreu um erro inesperado" },
      { status: 500 }
    );
  }
}