function sigma(row_start, col_start, row, col, exp){
    var sum = 0;
    for(var i = row_start ; i<row ; i++){
    	for(var j = col_start ; j<col ; j++){
    		 sum = sum + exp(i, j, row);
    	}
    }
    return sum;
}
function exp(i, j, row){
 return (row == 1) ? (x[j]):(x[i][j]);
}
let x = [[1, 2, 3],
		 [4, 5, 6],
		 [7, 8, 9]]
 console.log(sigma(0, 0, 3, 3, exp));
