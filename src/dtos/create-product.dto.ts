export class CreateProductDto {
    product?: {
        idProduct: number | null;
        name: string;
        description: string;
        enterprise?: {
            idEnterprise: number | null;
            name: string;
        };
    };
    sale?: {
        idSale: number | null;
        idProduct: number;
        price: string;
        sale_start: string;
        sale_end: string;
        catalog?: {
            idCatalog: number | null;
            name: string;
        }
    }
}
