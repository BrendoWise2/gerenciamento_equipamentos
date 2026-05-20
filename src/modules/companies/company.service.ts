import { companyRepository } from "./company.repository";


export const companyService = {

    list() {
        return companyRepository.findMany();
    },

};