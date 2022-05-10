const canadaCode = "CA";
const usaCode = "US";

function getURLByLocation(location){
    switch (location.toLowerCase()){
      case canadaCode.toLowerCase():
        return '/canada/home';
      case usaCode.toLowerCase():
        return '/home';
    }
    return '';
}
module.exports = getURLByLocation;
