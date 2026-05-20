import { prisma } from "@/lib/prisma";

export const companyRepository = {

    findMany() {
        return prisma.company.findMany({
            orderBy: {
                name: "asc",
            },
        });
    },
};