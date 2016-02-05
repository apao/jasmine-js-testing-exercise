/* Tests for Tic-Tac Javascript */


describe("Tic Tac JS", function () {

    it("should detect a full board as full", function () {
        board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];
        expect(isBoardFull()).toBeTruthy();
    });

    // STEP 2: Uncomment this out.

    it("should detect a non-full board as not full", function () {
       board = ["X", "X", null, "X", "X", "X", "X", "X", "X"];
       // Add a matcher for this test.
       expect(isBoardFull()).toBeFalsy();
    });
    
    it("should convert x, y to cell #", function () {
       var cellNumber1 = xyToCell(1, 1);
       var cellNumber2 = xyToCell(0, 0);
       // Add 2 matchers for this test, one for cellNumber1 and one for cellNumber2.
       expect(cellNumber1).toBe(4);
       expect(cellNumber2).toBe(0);
    });
    
    it("should make computer moves", function () {
       board = ["X", null, null, null, null, null, null, null, null];
       computerMove();
       var newBoardPiece = board[1];
       // Add a matcher for this test.
       expect(newBoardPiece).not.toBeNull();
       expect(newBoardPiece).toBe("O");
    });

    // END STEP 2

    // Add the following tests, or think of some of your own.
    // it should update the board correctly based on the board
    it("should update the board correctly", function() {
        board = [null, null, "X", null, null, "X", null, null, null];
        updateBoard();
        var boardSlot = $("#cell-2").text();
        var boardSlot2 = $("#cell-5").text();
        expect(boardSlot).toBe("X");
        expect(boardSlot2).toBe("X");
    });


    // it should not fill in board slots that are already occupied
    it("should not fill already occupied slots", function() {
        board = ["X", null, "X", null, null, "X", null, null, null];
        expect(placePiece(2, "X")).toBeFalsy();
        computerMove();
        expect(board[1]).toBe("O");
    });

    // it should be able to determine a winner
    it("should determine a winner", function() {
        board = ["X", "X", "X", null, null, "X", null, null, null];
        expect(findWinner()).toBe("X"); // winner in a row
        board = ["X", null, null, null, "X", null, null, null, "X"];
        expect(findWinner()).toBe("X");
    });
    // it should not determine a winner when there is a tie

    it("should not determine winner when tied", function() {
        board = ["X", "X", "O", "O", "X", "X", "X", "O", "O"];
        expect(findWinner()).toBeFalsy();
        expect(checkGameOver()).toBeTruthy();
    });

    // it should be able to deduce the correct cell number
    // it should be able to declare a tie and end the game

});
