import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-excel2json',
  templateUrl: './excel2json.component.html',
  styleUrls: ['./excel2json.component.css']
})
export class Excel2jsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arrayBuffer:any;
  file:File;
  data: any
  incomingfile(event) {
    this.file= event.target.files[0]; 
    let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              this.data = XLSX.utils.sheet_to_json(worksheet,{raw:true})
              console.log(this.data);
          }
          fileReader.readAsArrayBuffer(this.file);
    }

}
