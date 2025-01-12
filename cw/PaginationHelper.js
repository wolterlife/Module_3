class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        const startIndex = pageIndex * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, this.itemCount());
        return endIndex - startIndex;
    }


    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}