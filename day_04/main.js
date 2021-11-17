// let currentPage = 1
let filterObj = {
    page : 1,
    category : "417",
    keyword : "đồ án"
  }
  
  function genarateQueryString(obj) {
    queryString = Object.keys(obj).map((key) => {
      if (!obj[key]) {
        return
      } else {
        return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
      }
    }).join('&');
    return decodeURIComponent(queryString.replace(/\+/g, "%20"));
  }
  
  console.log(genarateQueryString(filterObj));