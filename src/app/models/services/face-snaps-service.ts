import { FaceSnap } from './../face-snap.model';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
        id: 1,
        title: 'Nana Osaki',
        description: 'My friend from  nowhere',
        imageUrl: 'https://www.geekgeneration.fr/wp-content/uploads/2021/05/NANA.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Paris',
        },
        { 
        id: 2,
        title: 'Takumi Ichinose',
        description: 'My unreal crush', 
        imageUrl: 'https://i.pinimg.com/564x/07/09/60/0709606548444e36dd559b8572baafe8.jpg',
        createdDate: new Date(),
        snaps: 1200,
        },
        { 
        id: 3,
        title: 'Nana Komatsu',
        description: 'My favorite girl-friend',
        imageUrl: 'https://i.skyrock.net/0529/8810529/pics/163584044_small.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'NYC',
        },
      ]

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap){
            throw new Error('FaceSnap not found!');
        } else{
            return faceSnap;
        }
    }

    snapFacesnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}