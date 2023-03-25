export const resultSample: any[] = [
  {
    _: {
      inputs: {
        _: [
          {
            _: {
              type: {
                original: 'address',
                current: 'address',
                status: 'EQUAL',
                changes: 0
              },
              name: {
                original: null,
                current: '_to',
                status: 'ADDED',
                changes: 1
              }
            },
            status: 'MODIFIED',
            changes: 1
          },
          {
            _: {
              type: {
                original: 'uint256',
                current: 'uint256',
                status: 'EQUAL',
                changes: 0
              },
              name: {
                original: null,
                current: '_value',
                status: 'ADDED',
                changes: 1
              }
            },
            status: 'MODIFIED',
            changes: 1
          }
        ],
        status: 'MODIFIED',
        changes: 2
      },
      name: {
        original: 'transfer',
        current: 'transfer',
        status: 'EQUAL',
        changes: 0
      },
      outputs: {
        _: [
          {
            original: {
              type: 'bool'
            },
            current: null,
            status: 'DELETED',
            changes: 1
          }
        ],
        status: 'MODIFIED',
        changes: 1
      },
      type: {
        original: 'function',
        current: 'function',
        status: 'EQUAL',
        changes: 0
      }
    },
    status: 'MODIFIED',
    changes: 3
  },
  {
    _: {
      inputs: {
        original: [
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
        current: null,
        status: 'DELETED',
        changes: 1
      },
      name: {
        original: 'Approval',
        current: null,
        status: 'DELETED',
        changes: 1
      },
      type: {
        original: 'event',
        current: null,
        status: 'DELETED',
        changes: 1
      }
    },
    status: 'MODIFIED',
    changes: 3
  }
];
