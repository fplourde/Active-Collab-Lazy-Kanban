chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "openKanban")) {
	 var main = $('.object_view_main'),
		sideBar = $('.object_view_sidebar');
		
	if (main.length == 0){
		return;
	}
	var extractDomHtml = function(dom) {
		var out = [];
		for (var i = 0, max = dom.length; i< max ; i++) {
			out.push($(dom[i]).html());
		}
		
		return out;
	};	
	
	var id = main.find('.project_object_location [ng-bind="task.task_number"]').html() || '',
		project = main.find('.project_object_location a').html() || '',
		taskList = sideBar.find('.slim_control_label').html() || '',
		title = main.find('span.task_name').html() || '',
		description = main.find('.rich_text').html() || '',
		assignee = sideBar.find('.select_assignee_new .slim_control_label').html() || '',
		labels = extractDomHtml(sideBar.find('.task_label')) || '',
		estimate = sideBar.find('.select_time_estimate').attr("slim-control-label") || '',
		subTasks = [],
		createdBy = main.find('.project_object_location .user .user_name').html() || '',
		createdOn = main.find('.project_object_location').html().slice(-10) || '',
		appendToUrl = [],
		i = 0;
	
	if (description.length > 800) {
		description = description.substring(0,800) + " ...";
	}
	
	appendToUrl[i++] = '&id='+ encodeURIComponent(id);
	appendToUrl[i++] = '&project=' + encodeURIComponent(project);
	appendToUrl[i++] = '&taskList=' + encodeURIComponent(taskList);
	appendToUrl[i++] = '&title=' + encodeURIComponent(title);
	appendToUrl[i++] = '&description=' + encodeURIComponent(description);
	appendToUrl[i++] = '&assignee=' + encodeURIComponent(assignee);
	appendToUrl[i++] = '&labels=' + encodeURIComponent(labels.join(','));
	appendToUrl[i++] = '&estimate=' + encodeURIComponent(estimate);
	appendToUrl[i++] = '&createdBy=' + encodeURIComponent(createdBy);
	appendToUrl[i++] = '&createdOn=' + encodeURIComponent(createdOn);
		
	window.open('https://extranet.kiwi.ca/hoop/hoop-app.nsf/kanban.html?openPage' + appendToUrl.join(''),'_blank');
  }
});