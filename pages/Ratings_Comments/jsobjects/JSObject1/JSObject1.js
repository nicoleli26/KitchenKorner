
const updateOverallRating = (newRating, postId) =>  {
	// Trigger the Flask route to insert the new rating
	fetch('/diff_rating', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ Actual_Difficulty: newRating, Post_ID: postId })  // Adjust postId according to your implementation
	})
		.then(response => response.json())
		.then(data => {
		console.log(data.message);  // Log the response message
		// After inserting the new rating, fetch the overall difficulty rating
		fetch(`/overall_rating?post_id=${postId}`)  // Adjust the route endpoint and parameters according to your implementation
			.then(response => response.json())
			.then(data => {
			const overallRating = data.overall_rating;
			// Update the properties of the second star ratings widget with the fetched overall difficulty rating
			Your_Diff_Rating.values = overallRating;
		})
			.catch(error => console.error('Error fetching overall rating:', error));
	})
		.catch(error => console.error('Error adding rating:', error));
}

// Bind the onUpdate property of the first star ratings widget to the updateOverallRating function
Your_Diff_Rating.onUpdate = updateOverallRating;

