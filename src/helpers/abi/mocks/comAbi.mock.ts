export const comAbiMock = [
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        type: 'string'
      }
    ],
    type: 'function'
  },
  {
    inputs: [
      {
        type: 'address'
      },
      {
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        type: 'bool'
      }
    ],
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        type: 'uint256'
      }
    ],
    type: 'function'
  },
  {
    inputs: [
      {
        type: 'address'
      },
      {
        type: 'address'
      },
      {
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [
      {
        type: 'bool'
      }
    ],
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        type: 'uint8'
      }
    ],
    type: 'function'
  },
  {
    inputs: [
      {
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        type: 'uint256'
      }
    ],
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        type: 'string'
      }
    ],
    type: 'function'
  },
  {
    inputs: [
      {
        type: 'address'
      },
      {
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        type: 'bool'
      }
    ],
    type: 'function'
  },
  {
    inputs: [
      {
        type: 'address'
      },
      {
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        type: 'uint256'
      }
    ],
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        type: 'address'
      },
      {
        indexed: true,
        type: 'address'
      },
      {
        indexed: false,
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        type: 'address'
      },
      {
        indexed: true,
        type: 'address'
      },
      {
        indexed: false,
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  }
];
