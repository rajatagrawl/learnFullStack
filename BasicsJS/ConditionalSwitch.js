let reviewRating = "7"

revInInt = parseInt(reviewRating);

switch (revInInt) {
    case 1:
        console.log("Poor");
        break;
    case 2:
        console.log("Below expectations");
        break;
    case 3:
        console.log("OK");
        break;
    case 4:
        console.log("Hmm Goood");
        break;
    case 5:
        console.log("Superrrr");
        break;
    default:
        console.log("Please ebter rating again");
        break;
}