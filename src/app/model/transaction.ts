export interface Transaction {

    montant: string;
    dateEnvoie: Date;
    commissionEtat :number;
    commissionPartenaire :number;
    commissionRetrait :number;
    commissionWari:number;
    dateRetrait :Date;
    frais: number;
    message : string;
    // tslint:disable-next-line: ban-types
    prenomb: String, 
    nomb: String;
    // tslint:disable-next-line: ban-types
    prenom: string , 
    nom: String;
    guichetier: {nom: string, prenom: string};
    guichetierRetrait: {nom: string, prenom: string};
}