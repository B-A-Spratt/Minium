import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

// custom
import { CareerService } from '@app/shared/services/career.service';
import { GameEnum } from '@app/shared/models/enums/game-enum';
import { JobTitleEnum } from '@app/shared/models/enums/job-title-enum';
import { LocationEnum } from '@app/shared/models/enums/location-enum';
import { WorkTypeEnum } from '@app/shared/models/enums/work-type-enum';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  // enums
  jobTitleEnum;
  gameEnum;
  locationEnum;
  workTypeEnum;

  // keys
  jobTitleKeys;
  gameKeys;
  locationKeys;
  workTypeKeys;

  jobTitleClass;

  constructor(private careerService: CareerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();

    this.jobTitleEnum = JobTitleEnum;
    this.gameEnum = GameEnum;
    this.locationEnum = LocationEnum;
    this.workTypeEnum = WorkTypeEnum;

    this.jobTitleKeys = Object.keys(this.jobTitleEnum).slice(Object.keys(this.jobTitleEnum).length / 2);
    this.gameKeys = Object.keys(this.gameEnum).slice(Object.keys(this.gameEnum).length / 2);
    this.locationKeys = Object.keys(this.locationEnum).slice(Object.keys(this.locationEnum).length / 2);
    this.workTypeKeys = Object.keys(this.workTypeEnum).slice(Object.keys(this.workTypeEnum).length / 2);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.form.reset();
    }

    this.careerService.formData = {
      Id: 0,
      JobTitle: 0,
      Game: 0,
      Location: 0,
      WorkType: 0,
      PostDate: null
    }
  }

  onSubmit(form: NgForm) {
    this.careerService.formData.PostDate = new Date(formatDate(new Date(), 'yyyy/MM/dd', 'en'));
    if (this.careerService.formData.Id == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.careerService.postCareer().subscribe(
      s => {
        this.resetForm(form);
        this.careerService.refreshList();
        this.toastr.success('Added successfully.', 'Add Career Listing');
      }, e => {
        this.toastr.error('Somthing went wrong... Please try again later.', 'Add Career Listing');
      }
    )
  }

  updateRecord(form: NgForm) {
    this.careerService.putCareer().subscribe(
      r => {
        this.resetForm(form);
        this.careerService.refreshList();
        this.toastr.success('Updated successfully.', 'Update Career Cisting');
      }, e => {
        this.toastr.error('Something went wrong... Please try again later.', 'Update Career Listing');
      }
    )
  }
}
