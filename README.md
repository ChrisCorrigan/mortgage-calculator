# mortgage-calculator
code test project for Consumer Affairs

To get it up and running, npm install it, and then to start: npm run start. To just build: npm run build

Its setup to use Parcel. 

Notes:
* For the range slider I just created a simple HTML5 version which uses native browser features. This doesn't support the 2nd background colour on the horizontal line. I did not drop in a more complelx 3rd party solution as I don't think that was what you were looking for. 

* some of the background colours such as the results panel were very hard to see on my monitor, but I used the colour specified in the mocks anyways. 

* I normally write a lot of comments in my code, but with the time constraint to get this done I didn't - but it should be fairly self documenting via naming conventions and code organization. 

* The scss is divided up as if it is part of a larger project with multiple components and layouts. The code in the mortgage-calculator.scss file might be divided into other components depending on futher designs and what parts end up being shared. I wrote it as if the parts were to be re-used by other similar components, eg. panel, etc. 

* The javascript is written OOP style for components - for example the calculator could be instantiated multiple times on a page/site with different configurations. See the index.html for how to inject the component and pass in the default values, etc.

* one more note I forgot to add originally: the given formula for the 'loan amount' field appears to be wrong, looks like it needed a /12 to make it monthly. It still gave a different result than the example, but the example I assume is not accurate. So that would need to be followed up on to make sure the formula is correct. 


thanks,
Chris Corrigan

chriscorrigan14@gmail.com
604-761-8149
https://www.linkedin.com/in/corriganchris/
