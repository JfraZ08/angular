import { Component, OnInit, Input } from '@angular/core'; //importation du component angular
import { FaceSnap } from '../models/face-snap.model';
@Component({ 
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


//ajout donnée en brut
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap';
  }

  onaddSnap() {
    /*if(this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++; // boutton ajout
      this.buttonText = 'Oops, unSnap!' 
     }else {
    this.faceSnap.snaps--;
    this.buttonText = 'Oh snap';
  }*/
  this.faceSnap.snaps++;
  }
}
