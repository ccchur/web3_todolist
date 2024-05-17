export const contractData:any = {
    "address": "0x077407EC0c572ab59221A3d1e5b02Ba9f472d4a3",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "newItem",
                    "type": "string"
                }
            ],
            "name": "addTodoItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "indexToDelete",
                    "type": "uint256"
                }
            ],
            "name": "deleteTodoItem",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllTodoItems",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}