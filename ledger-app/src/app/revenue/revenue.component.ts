import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Revenue } from '../shared/revenue.model';

import { RevenueService } from '../shared/revenue.service';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
  providers: [RevenueService]
})
export class RevenueComponent implements OnInit {

  constructor(public revenueService: RevenueService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.revenueService.selectedRevenue = {
      _id: "",
      invoiceNumber: null,
      date: "",
      particulars: "",
      amount: null
    }
  }

  refreshRevenueList() {
    this.revenueService.getRevenueList().subscribe((res) => {
      this.revenueService.revenues = res as Revenue[];
    });
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.revenueService.postRevenue(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshRevenueList();
        alert("Entry saved successfully.");
      });
    }
    else {
      this.revenueService.putRevenue(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshRevenueList();
        alert("Entry updated successfully.");
      });
    }
  }

// onEdit(rev: Revenue) {
//   this.revenueService.selectedRevenue = rev;
// }

// onDelete(_id: string, form: NgForm) {
//   if (confirm('Are you sure to delete this record ?') == true) {
//     this.employeeService.deleteEmployee(_id).subscribe((res) => {
//       this.refreshEmployeeList();
//       this.resetForm(form);
//       M.toast({ html: 'Deleted successfully', classes: 'rounded' });
//     });
//   }
}