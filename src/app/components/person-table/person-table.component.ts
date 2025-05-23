import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { EPerson } from 'src/app/shared/interfaces/eperson';
 
@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined;

  addressOrEducation: string = '';

  isPerson() :boolean {
    if (this.personInput && 'address' in this.personInput) {
      this.addressOrEducation = this.personInput.address;
      return 'address' in this.personInput;
    }
    return false;
  }

  isEPerson() :boolean {
    if(this.personInput && 'education' in this.personInput) {
      this.addressOrEducation = this.personInput.education;
      return 'education' in this.personInput;
    }
    return false;
  }
}
