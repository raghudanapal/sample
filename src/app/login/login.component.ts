import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { RegisterComponent } from '../register/register.component';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
// import { FileUploader } from 'ng2-file-upload';
// const UploadURL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // title = 'Upload a File';
  // public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});
  loginForm: FormGroup;
  isSubmitted  =  false;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      fileupload: ['', Validators.required]
  });
  // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //        console.log('FileUpload:uploaded:', item, status, response);
  //        alert('File uploaded successfully');
  //    }; 
  }
  get formControls() { return this.loginForm.controls; }
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.router.navigateByUrl('register');
    // this.router.navigateByUrl('register');
    //this.router.navigate(['register']);
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}
}
