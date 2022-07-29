import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.scss']
})
export class DemoFormSkuComponent implements OnInit {

  productName: string;

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {

    this.productName = "ng-book: The Complete Guide to Angular";
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([
        Validators.required,
        this.skuValidation
      ])]
    });

    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(res => {
      console.log("el valor cambio: ", res);
    })

  }

  ngOnInit(): void { }

  onSubmit(form: any) {
    console.log("haz enviado datos", form)
  }

  skuValidation(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return { invalid: true };
    }
    return { invalid: false }
  }

}
