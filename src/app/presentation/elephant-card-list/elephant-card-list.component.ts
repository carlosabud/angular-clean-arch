import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElephantModel } from 'src/app/core/domain/elephant.model';
import { GetAllElephantsUseCase } from 'src/app/core/usecases/get-all-elephants.usecase';

@Component({
  selector: 'app-elephant-card-list',
  templateUrl: './elephant-card-list.component.html',
  styleUrls: ['./elephant-card-list.component.scss'],
})
export class ElephantCardListComponent implements OnInit {
  elephants$!: Observable<ElephantModel[]>;

  constructor(private getAllElephants: GetAllElephantsUseCase) {}

  ngOnInit(): void {}

  updateElephants() {
    this.elephants$ = this.getAllElephants.execute();
  }

  onSelect(event: any) {
    console.log(event.target);
  }
}
