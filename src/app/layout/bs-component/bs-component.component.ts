import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json').set('X-CustomHeader', 'custom header value');
@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {

    closeResult: string;
    constructor(private http: HttpClient, private modalService: NgbModal) { }

    alldata: any;

    lineChartData: Array<any> = [];
    lineChartLabels: Array<any> = [];
    lineChartType: string = 'line';

    ngOnInit() {
        return new Promise(resolve => {
            this.http.get('http://34.253.70.101:8080/gameSession', { headers }).subscribe(data => {
                this.alldata = data;
            }, err => {
                console.log(err);
            });
        });
    }

    open(content: any, item: any) {

        this.lineChartData = [];
        this.lineChartLabels = [];

        let playerPositionY: Array<any> = [];
        let targetPositionY: Array<any> = [];

        let dataitem = item.recordingData.frames;
        for (let frame of dataitem) {
            this.lineChartLabels.push(frame.timestamp);
            playerPositionY.push(frame.playerPositionY);
            targetPositionY.push(frame.targetPositionY);
        }

        this.lineChartData = [
            { data: playerPositionY, label: 'Player Position' },
            { data: targetPositionY, label: 'Target Position' }
        ];

        this.modalService.open(content, { size: 'lg', windowClass: 'modal-adaptive' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;


        }, (reason) => {


            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}
