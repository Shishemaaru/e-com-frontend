import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UserService } from '../user.service';
import { ProductService } from '../product.service';

import { faBoxOpen, faRupeeSign, faTrashAlt, faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productform;
  detailsForm;
  prodImgs = [];
  descImgs=[];
  // selectedFile;
  imgURL;
  message;
  description = [];
  // details =[];
 

  delete = faTrashAlt;
  box = faBoxOpen;
  dice = faDice;
  money = faRupeeSign;

  constructor(private fb: FormBuilder, private productService: ProductService ) { }

  ngOnInit() {
    this.initForm();
    document.body.classList.add('bg-p')
  }
  ngOnDestroy(){
    document.body.classList.remove('bg-p')

  }
  initForm(){
    this.productform=this.fb.group({
      prodname : '',
      prodcat : '',
      prodprice : '',
      // proddesc: '',
      prodbrand : '',
      image : '',
    })
    this.detailsForm=this.fb.group({
      head1 : '',
      head2 : '',
      desc1 : '',
      desc2 : '',
    })
  }

  
 
   
  userSubmit(formdata){
    if(this.productform.invalid){
      alert('invalid form')
      return;
    }
    formdata.description = this.description;
    formdata.images = this.prodImgs
    formdata.proddesc = this.detailsForm.value
    formdata.descImgs = this.descImgs
    console.log(formdata)
    this.productService.addproductdetail(formdata).subscribe((response) => {
      console.log(response);
    })
  }

  onFileChange(event){
    let selectedFiles = [];
    for(let file of event.target.files){
      let formdata = new FormData();
      this.prodImgs.push(file.name)
      this.preview(event.target.files);
    formdata.append('image', file, file.name);
    this.productService.uploadImage(formdata).subscribe(response=>{
      console.log(response);
    });
  }}

  onFileChange2(event){
    let selectedFiles = [];
    for(let file of event.target.files){
      let formdata = new FormData();
      this.descImgs.push(file.name)
      this.preview(event.target.files);
    formdata.append('image', file, file.name);
    this.productService.uploadImage(formdata).subscribe(response=>{
      console.log(response);
    });
  }}

  addDescription(){
    this.description.push(['', '']);
    console.log(this.description);
  }

  removeDescription(index){
    this.description.splice(index, 1);
  }

  // addDetails(){
  //   this.details.push(['']);
  //   console.log(this.details);

  // }

  preview(files){
    if(files.lenght===0)
    return;
  
  var mimeType = files[0].type;
  if(mimeType.match(/image\/ */)==null){
    this.message = "only image are supported"
    return;
  }
  var reader = new FileReader();
  
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) =>{
    this.imgURL = reader.result;
    
  }

}

getControl(){
  return this.productform.controls;
}

}