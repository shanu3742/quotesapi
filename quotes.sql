{
	"info": {
		"_postman_id": "c5d0b00a-044c-4a45-ab1f-36711cea6845",
		"name": "qotes lover",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "new quotes",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"Quotes\":\"The way you wake me up and hold me in your arms every morning makes for a great start to my day, and I know you will always make me feel this unique no matter how much we grow old\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "localhost:4040/apis",
					"host": [
						"localhost"
					],
					"port": "4040",
					"path": [
						"apis"
					]
				}
			},
			"response": []
		},
		{
			"name": "get quotes",
			"request": {
				"method": "GET",
				"header": [],
				"url": null
			},
			"response": []
		}
	]
}