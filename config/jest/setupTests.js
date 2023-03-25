import React from "react";
import "@testing-library/jest-dom";
import { enableFetchMocks } from 'jest-fetch-mock'

global.React = React;

enableFetchMocks()

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});