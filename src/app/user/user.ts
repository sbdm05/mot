export class User {
  _id: string;
  gender: string;
  prenom: string;
  nom: string;
  tel: number;
  adresse: string;
  email: string;
  pwd: string;
  adjs: [string, string, string];
  pic: string;
  letters: [
    {
      intitule: string;
      societe: string;
      contact: string;
      adresseSociete: string;
      cpVille: string;
      experience: string;
    }
  ];
  savedLetters: [
    {
      newValue: {
        intitule: string;
        societe: string;
        contact: string;
        adresseSociete: string;
        cpVille: string;
        experience: string;
      };
      date: string;
      _id: number;
    }
  ];
  constructor(obj?: Partial<User>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

// adjs: [
//     {
//       adj1: string;
//       adj2: string;
//       adj3: string;
//     }
//   ];
