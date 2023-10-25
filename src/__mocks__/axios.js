const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/12.jpg",
                },
                login: {
                    username: "TheUser01",
                },
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
