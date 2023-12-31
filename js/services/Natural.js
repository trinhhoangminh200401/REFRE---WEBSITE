export const NaturalPageService = (function($) {
    
    function getItems(page, itemsPerPage ,fakeData) {
      var startIndex = Math.max((page - 1) * itemsPerPage, 0);
      var endIndex = Math.min(startIndex + itemsPerPage, fakeData.length);
      console.log(startIndex,endIndex)
      var displayedItems = fakeData.slice(startIndex, endIndex);
      return displayedItems;
    }
  
    return {
      getItems: getItems
    };
  })(jQuery);