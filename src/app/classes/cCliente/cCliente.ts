export class cCliente {
    public id: string;
    public nom: string;
    public sal: number;
    public fenac: Date;

    constructor() {
        this.id = "";
        this.nom = "";
        this.sal = 0;
        this.fenac = new Date();
    }
}