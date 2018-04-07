$(function(model) {
    var initialCats =
    	[
			{
				id: 1, 
				name: "Smokey", 
				url: "http://thumb7.shutterstock.com/thumb_large/4165675/424867081/stock-photo-a-cat-plays-hide-and-seek-in-a-cardboard-box-424867081.jpg", 
				count: 0,
				nicknames: ['Smokey 1', 'Smokey 2', 'Smokey 3'],
			},
			{
				id: 2,
				name: "Tom",
				url: "http://www.publicdomainpictures.net/pictures/170000/t2/cat-on-the-white-1462965930mn5.jpg",
				count: 0,
				nicknames: ['Tom 1', 'Tom 2', 'Tom 3'],
			},
			{
				id: 3,
				name: "Felix",
				url: "http://thumb9.shutterstock.com/thumb_large/1135340/499196506/stock-photo-portrait-of-a-surprised-cat-scottish-straight-closeup-isolated-on-white-background-499196506.jpg",
				count: 0,
				nicknames: ['Felix 1', 'Felix 2', 'Felix 3'],
			},
			{
				id: 4,
				name: "Draco",
				url: "http://www.publicdomainpictures.net/pictures/50000/t2/kitty-cat-1374676578uQX.jpg",
				count: 0,
				nicknames: ['Draco 1', 'Draco 2', 'Draco 3'],
			},
			{
				id: 5,
				name: "Zeus",
				url: "http://www.publicdomainpictures.net/pictures/150000/t2/blonde-magic.jpg",
				count: 0,
				nicknames: ['Zeus 1', 'Zeus 2', 'Zeus 3'],
			}
		];

    var Cat = function(data) {
        this.id = data.id,
		this.name = data.name,
		this.url = data.url,
		this.count = data.count,
		this.nicknames = data.nicknames
    };


	function ViewModel() {
		var self = this;

        this.isAdminHidden = ko.observable(true);
        this.catList = ko.observableArray([]),
        initialCats.forEach(function(item) {
        	self.catList.push(new Cat(item));
        }),
  		this.currentCat = ko.observable(this.catList()[0]),


		this.incrementCounter = function() {
			++self.currentCat().count;
			self.onAdminSubmit();
		},

	    this.onAdminSubmit = function() {
	    	self.currentCat(self.currentCat());
	    },

	    this.onAdminShow = function() {
	    	self.isAdminHidden(false);
	    },

	    this.onAdminCancel = function() {
	    	self.isAdminHidden(true);
	    },

	    this.onSelectedCat = function() {
		    self.isAdminHidden(true);
	    },

	    this.stage = ko.computed(function() {
        	if (self.currentCat().count == 0) {
        		stage = "Kitten";
        	} else if (self.currentCat().count >= 1  && self.currentCat().count <= 2) {
        		stage = "Junior";
        	} else if (self.currentCat().count >= 3 && self.currentCat().count <= 6) {
        		stage = "Prime";
        	} else if (self.currentCat().count >= 7 && self.currentCat().count <= 10) {
        		stage = "Mature";
        	} else if (self.currentCat().count >= 11 && self.currentCat().count <= 14) {
        		stage = "Senior";
        	} else if (self.currentCat().count > 15) {
        		stage = "Geriatric";
        	} else {
        		stage = "Unknown";
        	} 
	        return stage;
	    }, this);
	};

	var ViewModel = new ViewModel();
	ko.applyBindings(ViewModel);

});


