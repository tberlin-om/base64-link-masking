# base64-link-masking
Effective Link-Masking Method by Javascript &amp; base64

<h2>Script Functionality</h2>

<p>This script adds an event listener to the DOMContentLoaded event, which fires when the page's DOM has finished loading. When this event is triggered, the script selects all elements on the page that have the class "js-base64". It then removes any existing click event listeners from those elements and adds a new click event listener that calls the handleClick function.</p>

<p>The handleClick function is defined within the script and takes the click event as its parameter. It first prevents the default behavior of the click event, which is to follow the link specified in the element's "href" attribute. Instead, it decodes the value of the "data-base64" attribute using the "atob" function, which decodes a Base64-encoded string. It then sets the window's location to the decoded URL, effectively redirecting the user to a new page.</p>

<h2>Use Cases</h2>
	<ul>
		<li>Efficient crawler control, especially for websites that generate a lot of similar and duplicate content, e.g. through parameterizations.</li>
		<li>Hiding sensitive information to protect privacy and prevent spam (e.g. the encryption of the email address).</li>
	</ul>
