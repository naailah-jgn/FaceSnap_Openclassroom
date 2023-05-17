import { FaceSnapsService } from './../models/services/face-snaps-service';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router) {
  }

  ngOnInit(): void {
    this.buttonText = "Oh, Snap!";
  }

  onSnap() {
    if (this.buttonText === 'Oh, Snap!') {
      this.faceSnapsService.snapFacesnapById(this.facesnap.id, 'snap');
      this.buttonText = "Oops, unsnap!";
    } else {
      this.faceSnapsService.snapFacesnapById(this.facesnap.id, 'unsnap');
      this.buttonText = "Oh, Snap!";
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
}
}
