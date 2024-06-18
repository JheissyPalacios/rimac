import { useState, useEffect } from "react";
import initialState from "../initialState";
const { REACT_APP_PROJECT_ID } = process.env;

const useInitialState = (key, initialValue) => {
  const [state, setState] = useState(initialState);

  const setBox = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        box: payload,
      };
    });
  };

  const setBalance = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        balance: payload,
      };
    });
  };

  const modalBackground = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        cssModal: payload,
      };
    });
  };

  const modalRegister = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          register: payload,
        },
      };
    });
  };

  const modalLogin = (payload) => {
    setState((prevState) => {
      return {
        ...prevState.modal,
        modal: {
          ...prevState,
          login: payload,
        },
      };
    });
  };
  const modalBuy = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          buy: payload,
        },
      };
    });
  };
  const modalRecharge = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          recharge: payload,
        },
      };
    });
  };

  const modalLevel = (payload) => {
    setState((prevState) => {
      return {
        ...prevState,
        modal: {
          ...prevState.modal,
          level: payload,
        },
      };
    });
  };

  return {
    modalBackground,
    modalRegister,
    modalLogin,
    modalBuy,
    modalRecharge,
    modalLevel,
    setBalance,
    setBox,
    state,
  };
};

export default useInitialState;
