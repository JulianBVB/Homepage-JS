import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  exform!: FormGroup;

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null,
        [
          Validators.required,
          Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')
        ]
      ),
      'message': new FormControl(null, [Validators.required, Validators.minLength(15)]),

    });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }

  get name() {
    return this.exform.get('name');
  }

  get email() {
    return this.exform.get('email');
  }

  get phone() {
    return this.exform.get('phone');
  }

  get message() {
    return this.exform.get('message');
  }

}
