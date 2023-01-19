export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    this.addNeighborhood = (newNeighborhood) => {
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
      return self.sanFranciscoNeighborhoods;
    };
  }
