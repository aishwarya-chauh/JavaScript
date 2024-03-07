// MAP
// IN MAP values is stored in the form of key and value where both are written in string format, where value can be of any type 
// map is created by using new Map()
 const map = new Map()
 map.set("height", "5ft4'' ")
 map.set("Weight", "70")      // map.set(" "," ")
 map.set("name","Aish")
 map.set("Married","true")
 map.set("place", "Nashik")
 console.log(map);

 // above u can see map acts as key and set acts as value aand rembbb map stores value in the form of key and value
  console.log(map.get("name"));

  // unlike set map also does not hold duplicate key  and will overwrite the original value
  // example
  map.set("name", "Aishwarya Chauahn")
  console.log(map);

  // but map can hold same value in new key as shown below
  map.set("city", "Nashik")
  console.table(map)

// WE can delete particular key by following
map.delete("City") // map.available(key) is used to check if given key is available
console.table(map)

// we use map.keys()  to get all the keys
// map.values()  to get all the values
// traversing in map
const get = map.keys()
for (const key of get) {
    console.log(`${key} ${map.get(key)}` );
    
}