function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService()

	getImage = function getImage() {
		imageService.getImage(function (image) {
			document.body.style.backgroundImage =`url(${image.url})`
		})
	}
 getImage()
}

