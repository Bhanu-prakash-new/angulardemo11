
import { Component, OnInit } from '@angular/core';

type objInterface = {
  a: number;
  b: number;
}

type listInterface = {
  a: number;
  b: number;
  operation: string;
  result: number;
}

@Component({
  selector: 'app-table-fresh',
  templateUrl: './table-fresh.component.html',
  styleUrls: ['./table-fresh.component.css']
})
export class TableFreshComponent implements OnInit {
  inputObj = {} as objInterface; // prepares the object by looking into inteface.
  result: number = 0;
  selectedOperator: string = '+';
  operation: number = 0;
  info: Array<listInterface> = [];
  updateIndex: number = -1;

  constructor() { // It will initializes the varaibles and the methodss

  }
  // this means . it is used for accessing the properties and methods declared in the class component
  handleMathOperation(typeOfCalculation: string) {
    let { a, b } = this.inputObj;//Destructring the object

    if (!!a && !!b) {
      switch (typeOfCalculation) {
        case "add":
          this.result = a + b;
          this.selectedOperator = '+';
          break;
        case "div":
          this.result = a / b;
          this.selectedOperator = '/';
          break;
        case "mul":
          this.result = a * b;
          this.selectedOperator = '*';
          break;
        case "sub":
          this.result = a - b;
          this.selectedOperator = '-';
          break;

      }
      this.reset();
      if (this.updateIndex > -1) {
        this.info[this.updateIndex] = { a, b, operation: this.selectedOperator, result: this.result }
      } else {
        this.operation = this.operation + 1;
        this.info.unshift({ a, b, operation: this.selectedOperator, result: this.result });
        localStorage.setItem('tabledata', JSON.stringify(this.info));
      }
    }
  }

  reset() {
    this.inputObj = {} as objInterface;
  }

  update(i: number): void {
    this.updateIndex = i;
    let { a, b } = this.info[i];
    this.inputObj = { a, b };
  }

  ngOnInit() {
    let currentData = localStorage.getItem('tabledata');
    if (currentData) {
      this.info = JSON.parse(currentData);
    }
  }

}
