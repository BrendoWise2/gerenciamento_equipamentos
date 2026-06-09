import { companyRepository } from "./company.repository";
import { CreateCompanyInput, UpdateCompanyInput } from "./company.schema";


export const companyService = {

    listAll() {
        return companyRepository.findMany();
    },

    listById(id: string){
        return companyRepository.findById(id)
    },

    create(data: CreateCompanyInput){
        return companyRepository.create(data);
    }, 
    
    edit(id: string, data: UpdateCompanyInput){
        return companyRepository.edit(id, data)
    }
};