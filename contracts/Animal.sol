// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Animal {
    string public species;

    // 생성자를 통해 종 이름을 초기화
    constructor(string memory _species) {
        species = _species;
    }

    // 가상 함수: 오버라이딩을 허용하기 위해 virtual 사용
    function makeSound() public view virtual returns (string memory) {
        return "Unknown Sound";
    }
}