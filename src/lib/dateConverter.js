export function getNowDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month + '-' + day;

    return dateString;
}

export function convertDateFormat(today) {
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    const dateString = year + '-' + month + '-' + day;

    return dateString;
}


export const monthLinkedList = [
    { month: 'Jan' , next :  1},
    { month: 'Feb' , next :  2},
    { month: 'Mar' , next :  3},
    { month: 'Apr' , next :  4},
    { month: 'May' , next :  5},
    { month: 'Jun' , next :  6},
    { month: 'Jul' , next :  7},
    { month: 'Aug' , next :  8},
    { month: 'Sep' , next :  9},
    { month: 'Oct' , next :  10},
    { month: 'Nov' , next :  11},
    { month: 'Dec' , next :  0},
]