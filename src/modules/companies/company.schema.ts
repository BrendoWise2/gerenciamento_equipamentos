import {z} from "zod";


export const createCompanySchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    cnpj: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email("E-mail inválido").optional(),
});

export type CreateCompanyInput = z.infer<typeof createCompanySchema>;



//UPDATE COMPANY -------///

export const updateCompanySchema = createCompanySchema.partial();

export type UpdateCompanyInput = z.infer<typeof updateCompanySchema>;