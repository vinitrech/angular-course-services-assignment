import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService{
  activeInsertCount: number = 0
  inactiveInsertCount: number = 0

  addActiveCount(){
    this.activeInsertCount += 1;
    console.log("Active insert count: " + this.activeInsertCount);
  }

  addInactiveCount(){
    this.inactiveInsertCount += 1;
    console.log("Inactive insert count: " + this.inactiveInsertCount);
  }
}
