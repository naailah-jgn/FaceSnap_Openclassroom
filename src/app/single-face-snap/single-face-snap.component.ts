import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from './../models/services/face-snaps-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  facesnap!: FaceSnap;
  buttonText!: string;

  constructor(private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.buttonText = "Oh, Snap !";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.facesnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh, Snap !'){
      this.FaceSnapsService.snapFacesnapById(this.facesnap.id, 'snap');
      this.buttonText = "Oops, unsnap!";
    }else{
      this.FaceSnapsService.snapFacesnapById(this.facesnap.id, 'unsnap');
      this.buttonText = "Oh, Snap !";
    }
  }
}
