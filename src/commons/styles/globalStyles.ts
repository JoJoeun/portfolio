import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }

  input {
    padding: 16px;
    border: 1px solid #bdbdbd;
    border-radius: 2px;

    :focus {
      outline: none;
    }
  }

  textarea {
    padding: 20px;
    resize: none;
    border: 1px solid #bdbdbd;

    :focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
  }
`;
