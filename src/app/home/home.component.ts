import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public shippingList: any[];

  constructor() {}

  ngOnInit() {
    this.shippingList = [
      {
        date: { dayName: "Monday", day: "10th", hour: "2:28", meridiem: "PM" },
        origin: "Houston, TX, 33619",
        destination: "Atlanta, GA, 30123",
        price: parseFloat("250.0").toFixed(2),
        quantity: 1
      },
      {
        date: { dayName: "Monday", day: "10th", hour: "2:28", meridiem: "PM" },
        origin: "Houston, TX, 33619",
        destination: "Atlanta, GA, 30123",
        price: parseFloat("250.0").toFixed(2),
        quantity: 1
      },
      {
        date: { dayName: "Monday", day: "10th", hour: "2:28", meridiem: "PM" },
        origin: "Houston, TX, 33619",
        destination: "Atlanta, GA, 30123",
        price: parseFloat("250.0").toFixed(2),
        quantity: 1
      }
    ];
  }
}
