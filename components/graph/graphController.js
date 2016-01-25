	// create the controller and inject Angular's $scope
	
	var scotchApp = $App.getApp();
	scotchApp.controller('graphController', function($scope) {
		$scope.my_items = {
    item1: { kind: "Pod" },
    item2: { kind: "Node" },
	item3: { kind: "Node" },
	item4: { kind: "Node" },
	item5: { kind: "Pod" },
    item6: { kind: "Node" },
	item7: { kind: "Node" },
	item8: { kind: "Node" }
};

$scope.my_relations = [
    { source: "item1", "target": "item2"},
	{ source: "item1", "target": "item3"},
	{ source: "item1", "target": "item4"},
	{ source: "item5", "target": "item6"},
	{ source: "item5", "target": "item7"},
	{ source: "item5", "target": "item8"}
];

$scope.my_kinds = {
    "Pod": "#vertex-Pod",
    "Node": "#vertex-Node"
};
	});