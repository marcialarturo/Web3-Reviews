// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ByteHasher } from './helpers/ByteHasher.sol';
import { IWorldID } from './interfaces/IWorldID.sol';

contract RestaurantReviewsWorldCoin is ERC721URIStorage {
   using ByteHasher for bytes;
   using Counters for Counters.Counter;

  /// @notice Thrown when attempting to reuse a nullifier
    error InvalidNullifier();
    /// @dev The WorldID instance that will be used for verifying proofs
    // IWorldID internal immutable worldId;
    /// @dev The WorldID group ID (1)
    uint256 internal immutable groupId = 1;
    /// @dev Whether a nullifier hash has been used already. Used to prevent double-signaling
    mapping(uint256 => bool) internal nullifierHashes;

  struct Restaurant {
        uint256 id;
        string name;
        string url_ipfs;
        uint256[] reviewIds;
        uint256 rating;
    }

    struct Review {
        uint256 id;
        uint256 restaurantId;
        string url_ipfs;
    }

    mapping (uint256 => Restaurant) public restaurants;
    mapping (uint256 => Review) public reviews;

    uint256 public restaurantCount;
    uint256 public reviewCount;


  // calldata is read only, use for funct inputs as params
  // function createClass(string calldata _cid, uint _targetAmmount) public {
     function addRestaurant(string memory _name, string memory _url_ipfs, uint256 _rating, uint256 root, uint256 nullifierHash, uint256[8] calldata proof) public {
      // first, we make sure this person hasn't done this before
      if (nullifierHashes[nullifierHash]) revert InvalidNullifier();
        // then, we verify they're registered with WorldID, and the input they've provided is correct
        worldId.verifyProof(
          root,
          groupId,
          abi.encodePacked(input).hashToField(),
          nullifierHash,
          abi.encodePacked(address(this)).hashToField(),
          proof
      );
      // finally, we record they've done this, so they can't do it again (proof of uniqueness)
      nullifierHashes[nullifierHash] = true;
        restaurantCount++;
        restaurants[restaurantCount] = Restaurant({
            id: restaurantCount,
            name: _name,
            url_ipfs: _url_ipfs,
            reviewIds: new uint256[](0),
            rating: _rating
        });
        emit newRestaurant(
            restaurantCount,
            _name,
            _url_ipfs,
            rating
        );
    }

        function addReview(uint256 _restaurantId, string memory _url_ipfs) public {
        require(_restaurantId <= restaurantCount, "Invalid restaurant ID");
        reviewCount++;
        reviews[reviewCount] = Review({
            id: reviewCount,
            restaurantId: _restaurantId,
            url_ipfs: _url_ipfs
        });
        restaurants[_restaurantId].reviewIds.push(reviewCount);
    }

    function getRestaurant(uint256 _restaurantId) public view returns (uint256, string memory, string memory, uint256[] memory, uint256) {
        require(_restaurantId <= restaurantCount, "Invalid restaurant ID");
        Restaurant memory restaurant = restaurants[_restaurantId];
        return (restaurant.id, restaurant.name, restaurant.url_ipfs, restaurant.reviewIds, restaurant.rating);
    }

    function getAllRestaurants() public view returns (uint256[] memory) {
        uint256[] memory ids = new uint256[](restaurantCount);
        for (uint256 i = 1; i <= restaurantCount; i++) {
            ids[i-1] = i;
        }
        return ids;
    }

    function getReviewsByRestaurant(uint256 _restaurantId) public view returns (uint256[] memory) {
        require(_restaurantId <= restaurantCount, "Invalid restaurant ID");
        return restaurants[_restaurantId].reviewIds;
    }



  function donate(uint _donationId, uint _donationAmmount) public {
    ClassesBluePrint storage _currentGroup = listOfClasses[_donationId];
    _currentGroup.totalDonations += _donationAmmount;
  }

  function getAllGroups() public view returns (ClassesBluePrint[] memory) {
      ClassesBluePrint[] memory groupsArray = new ClassesBluePrint[](_totalClasses);

      for (uint i = 0; i < _totalClasses; i++) {
          ClassesBluePrint storage currentItem = listOfClasses[i];
          groupsArray[i] = currentItem;
      }
      return groupsArray;
  }

  function formatPermissions() public view returns (bytes memory) {
     return abi.encodeCall(
            cfaV1Lib.cfa.authorizeFlowOperatorWithFullControl,
            (
                ISuperfluidToken(superToken),
                address(this),
                new bytes(0)
            )
        );
    }

    function createFlow(address receiver, int96 flowRate, uint256 toWrap) external {
        _transfer(msg.sender, address(this), toWrap);
        _approve(address(this), superToken, toWrap);
        IAlluoSuperToken(superToken).upgradeTo(msg.sender, toWrap, "");
        cfaV1Lib.createFlowByOperator( msg.sender, receiver, ISuperfluidToken(superToken), flowRate);
        ISuperfluidResolver(superfluidResolver).addToChecker(msg.sender, receiver);
        emit CreateFlow(msg.sender, receiver, flowRate);
    }
    function stopFlowWhenCritical(address sender, address receiver) external onlyRole(DEFAULT_ADMIN_ROLE) {
        cfaV1Lib.deleteFlowByOperator(sender, receiver, ISuperfluidToken(superToken));
        emit DeletedFlow(sender, receiver);
    }

     function forceWrap(address sender) external onlyRole(DEFAULT_ADMIN_ROLE) {
          uint256 balance = balanceOf(address(sender));
          _transfer(sender, address(this), balance);
          _approve(address(this), superToken, balance);
          IAlluoSuperToken(superToken).upgradeTo(sender, balance, "");
      }

}




