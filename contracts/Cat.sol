// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Animal.sol";  // Animal 계약을 가져오기

contract Cat is Animal {
    // 생성자: 부모 계약의 생성자 호출
    constructor() Animal("Cat") {}

    // 오버라이딩: virtual 함수 재정의
    function makeSound() public pure override returns (string memory) {
        return "Meow";
    }
}