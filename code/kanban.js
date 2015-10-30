
var QueryString = function () {
	  // This function is anonymous, is executed immediately and 
	  // the return value is assigned to QueryString!
	  var query_string = {};
	  var query = window.location.search.substring(1);
	  var vars = query.split("&");
	  for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	        // If first entry with this name
	    if (typeof query_string[pair[0]] === "undefined") {
	      query_string[pair[0]] = decodeURIComponent(pair[1]);
	        // If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
	      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
	      query_string[pair[0]] = arr;
	        // If third or later entry with this name
	    } else {
	      query_string[pair[0]].push(decodeURIComponent(pair[1]));
	    }
	  } 
    return query_string;
}();

var kanBan = $('.kanban');
kanBan.find('.task-list').append(QueryString.taskList);
kanBan.find('.task-num').append(QueryString.id);
kanBan.find('.task-project').append(QueryString.project);
kanBan.find('.task-title').append(QueryString.title.substring(QueryString.title.indexOf(':') + 2));
kanBan.find('.task-desc').append(QueryString.description);
kanBan.find('.task-estimate').append(QueryString.estimate);
window.print();
