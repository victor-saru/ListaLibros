export class GlobalFunctions {
	public static getBooksFromJSONFile(filePath: string): any {
		try {
			return fetch(filePath)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok.');
					}
					return response.json();
				})
				.catch((error) => {
					console.error('Error fetching or parsing JSON file:', error);
					return [];
				});
		} catch (error) {
			console.error('Error fetching or parsing JSON file:', error);
			return [];
		}
	}
}
