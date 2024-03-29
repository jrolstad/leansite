
var MainViewModel = function() {
	var self = this;
	
	self.availableSections = ko.observableArray(["Home", "About", "Contact"]);
	self.selectedSection = ko.observable("Home");
	
	self.showUserRegistration = ko.observable(false);
	self.showRegistrationConfirmation = ko.observable(false);
	self.userEnteredEmailAddress = ko.observable();
	self.canPerformHomeAction = ko.observable(true);
	
	self.selectSection = function(section){
		self.selectedSection(section);
		self.canPerformHomeAction(true);
		
		self.showUserRegistration(false);
		self.showRegistrationConfirmation(false);
		
		_gaq.push(['_trackEvent', 'NavBar', 'SectionSelected', section])
	}
	
	self.performHomeAction = function(){
		self.canPerformHomeAction(false);
		self.showUserRegistration(true);
		
		_gaq.push(['_trackEvent', 'HomeAction', 'Execute', '1'])
		
	}
	
	self.registerUser = function(){
		self.showUserRegistration(false);
		self.showRegistrationConfirmation(true);
		
		_gaq.push(['_trackEvent', 'Registration', 'EmailAddress', self.userEnteredEmailAddress()])
	}
}