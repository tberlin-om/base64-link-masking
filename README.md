# base64-link-masking
Effective Link-Masking Method with Base64 & Javascript

<h2>Script Functionality</h2>

<p>The script adds an event listener for the DOMContentLoaded event, which fires when the DOM of the page is fully loaded. Once the event fires, the script scans the page for elements with the individual class (js-base64). These elements contain the Base64-encoded URL, which is used instead of regular links. Then, the script adds an event listener to each element in the NodeList, which responds to the click event and executes the handleClick() function. The function is called when an element with class js-base64 is clicked.</p>

<p>The atob() function is used to decode the base64-encoded value in the data-base64 attribute of the clicked element. The decoded value is then passed as a new URL to the browser's window.location.href property to load the page pointed by the Base64 string.</p>

<h2>Use Cases</h2>
	<ul>
		<li>Efficient crawler control, especially for websites that generate a lot of similar urls and duplicate content, e.g. through parameterizations.</li>
		<li>Hiding sensitive information to protect privacy and prevent spam (e.g. the encryption of the email address).</li>
	</ul>
