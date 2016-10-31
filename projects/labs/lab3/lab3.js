get node list and increase depth by one for its depth
after the for loop to get all the dashes correctly then print out the tag maybe
using .innerHTML
print before the pre tag


root = document.getElementsByTagName("html")[0];


var str= domIterate(root);


function domIterate(current, depth)
{
	if(!depth)
		{
			depth =0;
		}
if (current.nodetype ==1){
	var txt = '';
}
for (var i =0;i<depth i++) {
	txt += '-';
}
add name of current tag to txt 
}