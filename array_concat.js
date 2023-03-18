function createSchoolGroup(groupLetter, numGroups) {
    let arr = [];

    for (let i = 1; i <= numGroups; i++) {
        arr.push(i + groupLetter);
    }
    return arr;
  } 

  console.log(createSchoolGroup("a", 3));