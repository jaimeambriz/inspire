function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		drawQuote(quote)
	})

function drawQuote(quote){
	var template = `
	<blockquote class="blockquote-reverse">
		<h4>“${quote.quote}”</h4>
		<footer id="author">${quote.author}</footer>
	</blockquote>`
	

	document.getElementById("quote").innerHTML = template
}


}
