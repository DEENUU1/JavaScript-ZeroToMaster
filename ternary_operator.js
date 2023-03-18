
function extendMemberShip(user) {
    let memberShipDiscountFlag = (
        user.numMembershipYears >= 2) ? true : false;
    

    let minPostsFlag = user.numberOfPosts >= 30 ? true : false;

    if (memberShipDiscountFlag && minPostsFlag) {
        user.membershipCost *= 0.6;
        console.log("Kwalifikuje się");
    } else {
        console.log("Ma standardwową cenę");
    }
}


let user = {
    email: "ania@test.com",
    membershipCost: 100,
    numMembershipYears: 3,
    numberOfPosts: 40
};

console.log(extendMemberShip(user));
