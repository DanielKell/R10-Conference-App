import Realm from 'realm';

const Faves = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'int',
    faved_on: 'date',
  }
};

const realm = new Realm({schema: [Faves]});

export const queryFaves = () => {
    return realm.objects("Fave");
}

export const deleteFave = (id) => {
    let fav = realm.objects('Fav').filtered('id ==$0', id)
    try {
        realm.write(() => {
            realm.delete(fav)
        })
    } catch (e) {
        console.log('error deleting fav', e)
    }
}

export const createFave = (session_id) => {

    try {
    realm.write(() => {
        realm.create('Fave', {id: session_id, faved_on: new Date()});
    });
    } catch (e) {
        console.log("Error on creation");
    }
}

export default new Realm({schema: [Faves]});

