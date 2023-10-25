const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
<<<<<<< Updated upstream
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
=======
                    large: "https://randomuser.me/api/portraits/women/12.jpg",
                },
                login: {
                    username: "TheUser01",
                },
>>>>>>> Stashed changes
            }
        ]
    }
}

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
