export class Revue {
    idFilm: number;
    name: string;
    date: string;
    content: string;
    rate: number;


    constructor(idFilm:number,name: string,date: string,content:string,rate:number) {
        this.idFilm=idFilm;
        this.name=name;
        this.date=date;
        this.content=content;
        this.rate=rate;
    }
}
