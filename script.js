const studentNames = ["Justin", "Levi", "Jessica", "Kelli", "Jacob", "Ryan"]

const studentData = [
  {
    id: 1,
    firstName: "Justin",
    lastName: "Warden",
    favoriteFood: "Hot dogs"
  },
  {
    id: 2,
    firstName: "Levi",
    lastName: "Samples",
    favoriteFood: "Pizza"
  },
  {
    id: 3,
    firstName: "Jessica",
    lastName: "Ayerst",
    favoriteFood: "Tomato soup"
  },
  {
    id: 4,
    firstName: "Kelli",
    lastName: "Evans",
    favoriteFood: "Hamburgers"
  },
  {
    id: 5,
    firstName: "Jacob",
    lastName: "Perry",
    favoriteFood: "BLT"
  },
  {
    id: 6,
    firstName: "Ryan",
    lastName: "Clay",
    favoriteFood: "Tacos"
  }
]


// Use .forEach() to loop over the studentNames

// Print each student's name to the console
studentNames.forEach(singleName =>{console.log(singleName)});
// Use .forEach() to loop over the studentData array
studentData.forEach(singleStudent => {console.log(`${singleStudent.firstName} ${singleStudent.lastName} favorite food is ${singleStudent.favoriteFood}.`)})
// Print a sentence about each student to the console. The sentence should include their full name and their favorite food. (Example: Ryan Clay's favorite food is Tacos.)
const businesses = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
  ];

//   1. copy and paste the following array into your javascript file
//   2. Use a .forEach() loop to loop over the data
businesses.forEach(business => {
    console.log(`${business.companyName} is located in ${business.addressStateCode} on ${business.addressFullStreet} in a city called ${business.addressCity}.`)
})
//   3. Print a sentence about each company to the console. The sentence should have the purchasing agent's full name (first and last), the company's name, and the industry. 
//   4. Example: "Celia Torphy is the purchasing agent for Ran-taxon, which is a Manufacturing company.
//   Collapse
  
  
  
  // Use .filter() to find only students whose first name begin with J
  const StudentswhosFirstNameBeginsWithJ = studentData.filter(beginswithj => beginswithj.firstName[0] === "J");
  console.log(StudentswhosFirstNameBeginsWithJ)
// Hint: use the .startsWith() method to figure out what letter a word starts with
// Use your studentData array
//  Use .map() to bring back just an array of the student's first names
const firstNamesStudent = studentData.map(
    student => `${student.firstName} loves ${student.favoriteFood}`
    
)
console.log(firstNamesStudent)
// Use .map() to bring back an array of sentences. Each student should have their own sentence. The sentence should include their first name and their favorite food. For example, "Kelli loves Hamburgers"
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
// Use .reduce() to find the total amount of rainfall
const totalmonthlyRainfall = monthlyRainfall.reduce((runningTotal, currentValue) => runningTotal += currentValue)
console.log(totalmonthlyRainfall)
const bigSpenders = businesses.filter(business => {
    let over9000 = false;
   ( i = 0, i<=business.orders.length,i++)
    if (business.orders[i] >= 9000){
        over9000 = true
    }
    return over9000
})


console.log(bigSpenders)// Array to contain all the New York businesses
