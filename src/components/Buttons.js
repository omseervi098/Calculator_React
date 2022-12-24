import React from "react";
import Button from "react-bootstrap/Button";
function Buttons(props) {
  const { getResults, handleClear, handleInput, changeplusminus } = props;
  // bind the enter key to the getResults function
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getResults();
    }
  });
  return (
    <div className="button-grid">
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleClear}
      >
        C
      </Button>
      <Button
        variant="outline-secondary"
        className="button "
        onClick={changeplusminus}
      >
        +/-
      </Button>
      <Button
        variant="outline-secondary"
        className="button "
        onClick={handleInput}
      >
        %
      </Button>
      <Button
        variant="outline-secondary"
        className="button rightbtn"
        onClick={handleInput}
      >
        /
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button"
      >
        7
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button"
      >
        8
      </Button>
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleInput}
      >
        9
      </Button>
      <Button
        variant="outline-secondary"
        className="button rightbtn"
        onClick={handleInput}
      >
        *
      </Button>
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleInput}
      >
        4
      </Button>
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleInput}
      >
        5
      </Button>
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleInput}
      >
        6
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button rightbtn"
      >
        -
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button"
      >
        1
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button"
      >
        2
      </Button>
      <Button
        variant="outline-secondary"
        onClick={handleInput}
        className="button"
      >
        3
      </Button>
      <Button
        variant="outline-secondary"
        className="button rightbtn"
        onClick={handleInput}
      >
        +
      </Button>
      <Button
        variant="outline-secondary"
        className="button zerobtn"
        onClick={handleInput}
      >
        0
      </Button>
      <Button
        variant="outline-secondary"
        className="button"
        onClick={handleInput}
      >
        .
      </Button>
      <Button
        variant="outline-secondary"
        className="button equalbtn rightbtn"
        onClick={getResults}
      >
        =
      </Button>
    </div>
  );
}
export default Buttons;
