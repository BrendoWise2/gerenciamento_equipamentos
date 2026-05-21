import { companyRepository } from "./company.repository";
import { CreateCompanyInput } from "./company.schema";


export const companyService = {

    listAll() {
        return companyRepository.findMany();
    },

    create(data: CreateCompanyInput){
        return companyRepository.create(data);
    }    
};