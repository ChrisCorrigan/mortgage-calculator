# mortgage-calculator
code test project

To get it up and running, npm install it, and then to start: npm run start. To just build: npm run build

Its setup to use Parcel. 

Notes:
* For the range slider I just created a simple HTML5 version which uses native browser features. 

* The scss is divided up as if it is part of a larger project with multiple components and layouts. The code in the mortgage-calculator.scss file might be divided into other components depending on futher designs and what parts end up being shared. I wrote it as if the parts were to be re-used by other similar components, eg. panel, etc. 

* The javascript is written OOP style for components - for example the calculator could be instantiated multiple times on a page/site with different configurations. See the index.html for how to inject the component and pass in the default values, etc.

Chris Corrigan
