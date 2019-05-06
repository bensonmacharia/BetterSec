import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ElearnService {

    private elearnsCollection: AngularFirestoreCollection<Elearn>;
    private elearns: Observable<Elearn[]>;

    constructor(db: AngularFirestore) {
        this.elearnsCollection = db.collection<Elearn>('elearns');

        this.elearns = this.elearnsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
    }

    getElearns() {
        return this.elearns;
    }

    getElearn(id) {
        return this.elearnsCollection.doc<Elearn>(id).valueChanges();
    }

    removeElearn(id) {
        return this.elearnsCollection.doc(id).delete();
    }
}

export interface Elearn {
    elaernId?: number;
    elearnDomainId: number;
    elearnContent: string;
    elearnCreatedBy: number;
    elearnCreatedOn: string;
}
