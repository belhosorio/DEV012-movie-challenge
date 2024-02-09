import { MatPaginatorIntl } from "@angular/material";
import { Injectable } from "@angular/core";

@Injectable()
export class MyCustomPaginatorIntl extends MatPaginatorIntl{
    constructor(){
        super();
    }


    override itemsPerPageLabel = 'Peliculas por página: ';
    override nextPageLabel = 'Página siguiente';
    override previousPageLabel = 'Página anterior';

    override getRangeLabel = (page: number, pageSize: number, length: number) => {
        if(length == 0 || pageSize === 0){
            return `0 de ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.max(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
    }
}