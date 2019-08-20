import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// custom
import { CareerService } from '@app/shared/services/career.service';
import { Career } from '@app/shared/models/career.model';
import { JobTitleEnum } from '@app/shared/models/enums/job-title-enum';
import { GameEnum } from '@app/shared/models/enums/game-enum';
import { LocationEnum } from '@app/shared/models/enums/location-enum';
import { WorkTypeEnum } from '@app/shared/models/enums/work-type-enum';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {

  jobTitleEnum = JobTitleEnum;
  gameEnum = GameEnum;
  locationEnum = LocationEnum;
  workTypeEnum = WorkTypeEnum;

  constructor(private careerService: CareerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.careerService.refreshList();    
  }

  populateForm(c: Career) {
    this.careerService.formData = Object.assign({}, c);
  }

  onDelete(Id, form: NgForm) {
    if (confirm('Are you sure you wish to delete this career posting?')) {
      this.careerService.deleteCareer(Id).subscribe(
        s => {
          this.careerService.refreshList();
          this.toastr.success('Deleted successfully.', 'Delete Career Listing');
        }, e => {
          this.toastr.error('Something went wrong... Please try again later.', 'Delete Career Listing');
        }
      )
    }
  }
}
