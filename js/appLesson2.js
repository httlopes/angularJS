(function (){
	var app = angular.module('angularJS', []);

	app.controller('StoreController', function(){
		this.products= gems;
	});

	var gems = [
		{
			name: 'Potato',
			price: 10.95,
			description: 'blablabla',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'img.jpg',
					thumb: 'img.jpg',
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I Love this product",
					author: "joe@asd.com",
				},
				{
					stars: 1,
					body: "nhac",
					author: "asd@asd.com",
				}
			],
		},
		{
			name: 'Rice',
			price: 5.95,
			description: 'Rice is good',
			canPurchase: true,
			soldOut: true,
			images: [],
		}
	];

	app.controller("PanelController", function(){
		this.tab=1;

		this.selectTab= function(setTab){
			this.tab= setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab==checkTab;
		};
	});

	

})();