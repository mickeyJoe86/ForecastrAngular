const Header = {
	template: `
		<nav class="navbar navbar-inverse navbar-fixed-top">
			<div class="container">
				<div class="navbar-header">
					<a class="navbar-brand" href="#">{{ $ctrl.name }}</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<form class="navbar-form navbar-right">
						<div class="form-group">
							<input type="text" placeholder="Search your location" class="form-control">
						</div>
						<button type="submit" class="btn btn-success">Search</button>
					</form>
				</div>
			</div>
		</nav>
	`,
	controller: class HeaderController {
		name: string;
		constructor() {}
		$onInit() {
			this.name = "Forecastr";
		}

	},
	controllerAs: "$ctrl"
};

export default Header;
