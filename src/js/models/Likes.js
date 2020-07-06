export default class Likes{
    constructor(){
        this.likes = [];
    }

    addLike(id, title, author, img){
        const like = {id, title, author, img};
        this.likes.push(like);

        // Peresist data in localstorage
        this.PersistDate();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => id === id);
        this.likes.splice(index, 1);

        // Delete data in localstorage
        this.PersistDate();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    PersistDate() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));
        // Restoring likes from the localStorage
        if( storage ){
            this.likes = storage;
        }
    }

    clearDate(){
        localStorage.clear();
    }


}