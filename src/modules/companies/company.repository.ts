import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const companyRepository = {

    findMany() {
        return prisma.company.findMany({
            orderBy: {
                name: "asc",
            },
        });
    },

    findById(id: string){
        return prisma.company.findUnique({
            where: {
                id: id,
            }
        })
    },

    create(data: Prisma.CompanyCreateInput){
        return prisma.company.create({
            data,
        });
    },

    edit(id: string, data: Prisma.CompanyUpdateInput){
        return prisma.company.update({
            where:{id},
            data,
        })
    }
};