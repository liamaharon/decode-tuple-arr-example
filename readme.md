# Decode Tuple Array Example

Repository demonstrating potential issue with [ethereum-input-data-decoder](https://github.com/miguelmota/ethereum-input-data-decoder) decoding tuple[] types

## Problem

I'm attempting to decode calls to the 0x Exchange contract, which can contain `tuple[]` types.

For example, the call to `marketSellOrders` requires 3 params:

1. `orders: tuple[]`
2. `takerAssetFillAmount: uint256`
3. `signatures: bytes[]`

<details>
  <summary>marketSellOrders ABI (click to expand)</summary>
  
```js
  {
    constant: false,
    inputs: [
      {
        components: [
          { name: 'makerAddress', type: 'address' },
          { name: 'takerAddress', type: 'address' },
          { name: 'feeRecipientAddress', type: 'address' },
          { name: 'senderAddress', type: 'address' },
          { name: 'makerAssetAmount', type: 'uint256' },
          { name: 'takerAssetAmount', type: 'uint256' },
          { name: 'makerFee', type: 'uint256' },
          { name: 'takerFee', type: 'uint256' },
          { name: 'expirationTimeSeconds', type: 'uint256' },
          { name: 'salt', type: 'uint256' },
          { name: 'makerAssetData', type: 'bytes' },
          { name: 'takerAssetData', type: 'bytes' },
        ],
        name: 'orders',
        type: 'tuple[]',
      },
      { name: 'takerAssetFillAmount', type: 'uint256' },
      { name: 'signatures', type: 'bytes[]' },
    ],
    name: 'marketSellOrders',
    outputs: [
      {
        components: [
          { name: 'makerAssetFilledAmount', type: 'uint256' },
          { name: 'takerAssetFilledAmount', type: 'uint256' },
          { name: 'makerFeePaid', type: 'uint256' },
          { name: 'takerFeePaid', type: 'uint256' },
        ],
        name: 'totalFillResults',
        type: 'tuple',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
```
</details>

</br>
<details>
  <summary>Here's an example of what's returned when I decode a call to this method with ethereum-input-data-decoder (click to expand)</summary>

```js
{                                                                                                                                                                                                                  
  "method": "marketSellOrders",                                                                                                                                                                                    
  "types": [                                                                                                                                                                                                       
    {                                                                                                                                                                                                              
      "components": [                                                                                                                                                                                              
        {                                                                                                                                                                                                          
          "name": "makerAddress",                                                                                                                                                                                  
          "type": "address"                                                                                                                                                                                        
        }, 
        {                                                                                                                                                                                                          
          "name": "takerAddress",                                                                                                                                                                                  
          "type": "address"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "feeRecipientAddress",                                                                                                                                                                           
          "type": "address"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "senderAddress",                                                                                                                                                                                 
          "type": "address"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "makerAssetAmount",                                                                                                                                                                              
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "takerAssetAmount",                                                                                                                                                                              
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "makerFee",                                                                                                                                                                                      
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "takerFee",                                                                                                                                                                                      
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "expirationTimeSeconds",                                                                                                                                                                         
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "salt",                                                                                                                                                                                          
          "type": "uint256"                                                                                                                                                                                        
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "makerAssetData",                                                                                                                                                                                
          "type": "bytes"                                                                                                                                                                                          
        },                                                                                                                                                                                                         
        {                                                                                                                                                                                                          
          "name": "takerAssetData",                                                                                                                                                                                
          "type": "bytes"                                                                                                                                                                                          
        }                                                                                                                                                                                                          
      ],                                                                                                                                                                                                           
      "name": "orders",                                                                                                                                                                                            
      "type": "tuple[]"                                                                                                                                                                                            
    },                                                                                                                                                                                                             
    "uint256",                                                                                                                                                                                                     
    "bytes[]"                                                                                                                                                                                                      
  ],                            
  "inputs": [                                                                                                                                                                                                      
    [                                                                                                                                                                                                              
      "0x6f02E6d47147B4448Fe2f2eb25B4f534cf110c23",                                                                                                                                                                
      "0x0000000000000000000000000000000000000000",                                                                                                                                                                
      "0xA258b39954ceF5cB142fd567A46cDdB31a670124",                                                                                                                                                                
      "0x0000000000000000000000000000000000000000",                                                                                                                                                                
      {                                                                                                                                                                                                            
        "_hex": "0x410d586a20a4bffff5"                                                                                                                                                                             
      },                                                                                                                                                                                                           
      {                                                                                                                                                                                                            
        "_hex": "0x5e05647aedbbd450"                                                                                                                                                                               
      },                                                                                                                                                                                                           
      {                                                                                                                                                                                                            
        "_hex": "0x00"                                                                                                                                                                                             
      },
      {
        "_hex": "0x00"
      },
      {
        "_hex": "0x5d787202"
      },
      {
        "_hex": "0x016d1e79ae50"
      },
      "0xf47261b000000000000000000000000089d24a6b4ccb1b6faa2625fe562bdd9a23260359",
      "0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ]
  ],
  "names": [
    "",
    "takerAssetFillAmount",
    "signatures"
  ]
}
```

</details>

### What makes sense to me ✔️

- `types` provides all the information I need

### What I'm unsure about ❓

- `inputs` contains an array with a single entry in it, which appears to by a `tuple` not a `tuple[]`. I would have expected this first entry in `inputs` to be an _array_ of `tuples`, so that information for multiple `order`s can be included
- `takerAssetFillAmount` and `signatures` appear to be missing from the `inputs` array. I expected them to be at index `1` and `2` of `inputs`
- `names[0]` is an empty string, I expected it to be `"orders"` (this is not as much of a blocker for me than the first two points)

## Steps to run example

```bash
git clone https://github.com/liamaharon/decode-tuple-arr-example.git
```

```bash
cd decode-tuple-arr-example
```

```bash
npm i
```

```bash
node index.js
```
