export default {
	name: "QUnit test suite for UI5 TypeScript Walkthrough",
	defaults: {
		page: "ui5://test-resources/ui5/walkthrough/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 1
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "ui5/walkthrough/",
			never: [
				"ui5/walkthrough/test/",
				"ui5/walkthrough/localService/"
			]
		},
		loader: {
			paths: {
				"ui5/walkthrough": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "UI5 TypeScript Walkthrough - Unit Tests"
		}
	}
};
