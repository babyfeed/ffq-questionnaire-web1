//Classed to store clinician user data in components

export class FFQClinician {
  id: string;
  userId: string;
  username: string;
  userpassword: string;
  usertype: string;
  abbreviation: string;
  firstname: string;
  lastname: string;
  assignedclinic: string;
  previousclinics: any;
  isactive: boolean;


  constructor(userId: string, username: string, userpassword: string, usertype:string, abbreviation: string, firstname: string,
               lastname: string, assignedclinic: string, previousclinics: any, isactive: boolean) {
    this.userId = userId;
    this.username = username;
    this.userpassword = userpassword;
    this.usertype = usertype;
    this.abbreviation = abbreviation;
    this.firstname = firstname;
    this.lastname = lastname;
    this.assignedclinic = assignedclinic;
    this.previousclinics = previousclinics;
    this.isactive = isactive;
  }

}
