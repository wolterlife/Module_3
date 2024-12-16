function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    var pagecount = this.pageCount();
    if (pageIndex < 0 || pageIndex >= pagecount) return -1;
    if (pageIndex == pagecount - 1) {
        return this.itemCount() - Math.floor((this.itemCount() / this.itemsPerPage)) * this.itemsPerPage;
    }
    return this.itemsPerPage;
}

PaginationHelper.prototype.pageIndex = function (itemIndex) {
    var page = Math.floor(itemIndex / this.itemsPerPage);
    if (page >= this.pageCount() || page < 0)
        return -1;
    return page;
}