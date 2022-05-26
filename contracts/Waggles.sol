pragma solidity ^0.8.4;

contract Waggles is ERC721A, Ownable, ReentrancyGuard {

    uint256 public price = 100000000000000000;
    uint256 public maxSupply = 1000;
    uint256 public mintLimit = 4;
    string public baseURI;

    mapping(uint256 => string) private _URIS;
    mapping(address => bool) private luckTracker;
    mapping(address => uint256) public cardPurchaseTracker;



    constructor() ERC721A("Waggles", "WAG") {

    }

    //Public Functions

    function publicMint(uint256 quantity) external payable {
        uint256 _maxSupply = maxSupply;

        require(totalSupply() + quantity <= _maxSupply, "Sold Out");
        require(cardPurchaseTracker[msg.sender] != mintLimit,"Mint Limit Reached");
        require(msg.value >= (price * quantity), "Not Enough Ether Sent");

        _safeMint(msg.sender, quantity);
        cardPurchaseTracker[msg.sender] = cardPurchaseTracker[msg.sender] + quantity;


    }

    //Only Owner Functions

    function batchGiftMint(address[] memory _addresses, uint256 quantity) external onlyOwner {
        uint256 _maxSupply = maxSupply;
        uint256 totalQuantity = quantity * _addresses.length;
        uint256 totalSupply = totalSupply();

        require(totalQuantity + totalSupply <= _maxSupply, "Sold Out");
        for(uint256 i = 0; i < _addresses.length; i++){
            _safeMint(_addresses[i], quantity);
            maxSupply = maxSupply - quantity;  
        }
    }

    function alterMintLimit(uint256 newLimit) external onlyOwner {
        mintLimit = newLimit;
    }

    function editSalePrice(uint256 _newPriceInWei) external onlyOwner{
        price = _newPriceInWei;
    }


    function withdraw(address payable _to) public onlyOwner {
        require(_to != address(0), "Token cannot be zero address.");
        _to.transfer(address(this).balance);
    }


    // // metadata URI
    string private _baseTokenURI;

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    function contractURI() public pure returns (string memory) {
        return " ";
    }



    fallback() external payable {}

    receive() external payable {}

}