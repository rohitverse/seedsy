var H=Object.defineProperty,K=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var B=(t,e,a)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,C=(t,e)=>{for(var a in e||(e={}))U.call(e,a)&&B(t,a,e[a]);if(E)for(var a of E(e))Q.call(e,a)&&B(t,a,e[a]);return t},D=(t,e)=>K(t,G(e));import{j as S,R as P,H as Y,A as L,r as o,p as Z,W as J,C as V,a as X,S as f0,B as e0,b as t0,c as a0,d as s0,e as n0}from"./vendor.6b3405fb.js";const r0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}};r0();const f=S.exports.jsx,s=S.exports.jsxs,c0=S.exports.Fragment,i0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})});var $="/assets/logo.50cd15c5.png";const z=({title:t,classprops:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:t}),l0=()=>{const[t,e]=P.useState(!1);return s("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center items-center",children:f("img",{src:$,alt:"logo",className:"w-32 cursor-pointer"})}),s("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial",children:[["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f(z,{title:a},a+r)),f("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:"Login"})]}),s("div",{className:"flex relative",children:[!t&&f(Y,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),t&&f(L,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}),t&&s("ul",{className:"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none\r flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(L,{onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f(z,{title:a,classprops:"my-2 text-lg"},a+r))]})]})]})},o0=()=>s("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[s("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:$,alt:"logo",className:"w-32"})}),s("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Market"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Exchange"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Tutorials"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Wallets"})]})]}),s("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Come join us and hear for the unexpected miracle"}),f("p",{className:"text-white text-sm text-center font-medium mt-2",children:"contact@seedcapitals.org"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),s("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-left text-xs",children:"@Seed Capital \xA92022"}),f("p",{className:"text-white text-right text-xs",children:"All rights reserved"})]})]}),d0="hh-sol-artifact-1",b0="Transactions",m0="contracts/Transactions.sol",u0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220fd126a94f674d344dd85aa17880a2799449535f04e0d0e58e9f9d5d31ecbedce64736f6c63430008000033",x0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220fd126a94f674d344dd85aa17880a2799449535f04e0d0e58e9f9d5d31ecbedce64736f6c63430008000033",p0={},y0={};var g0={_format:d0,contractName:b0,sourceName:m0,abi:u0,bytecode:h0,deployedBytecode:x0,linkReferences:p0,deployedLinkReferences:y0};const w0="0x77dE8303C361C4164991ccB083cd1c4c976D6DA2",N0=g0.abi,k=P.createContext(),{ethereum:d}=window,T=()=>{const e=new J(d).getSigner();return new V(w0,N0,e)},v0=({children:t})=>{const[e,a]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[r,n]=o.exports.useState(""),[c,l]=o.exports.useState(!1),[b,y]=o.exports.useState(localStorage.getItem("transactionCount")),[g,w]=o.exports.useState([]),N=(i,u)=>{a(h=>D(C({},h),{[u]:i.target.value}))},I=async()=>{try{if(d){const h=(await T().getAllTransactions()).map(m=>({addressTo:m.receiver,addressFrom:m.sender,timestamp:new Date(m.timestamp.toNumber()*1e3).toLocaleString(),message:m.message,keyword:m.keyword,amount:parseInt(m.amount._hex)/10**18}));console.log(h),w(h)}else console.log("Ethereum is not present")}catch(i){console.log(i)}},W=async()=>{try{if(!d)return alert("Please install MetaMask.");const i=await d.request({method:"eth_accounts"});i.length?(n(i[0]),I()):console.log("No accounts found")}catch(i){console.log(i)}},_=async()=>{try{if(d){const u=await T().getTransactionCount();window.localStorage.setItem("transactionCount",u)}}catch(i){throw console.log(i),new Error("No ethereum object")}},q=async()=>{try{if(!d)return alert("Please install MetaMask.");const i=await d.request({method:"eth_requestAccounts"});n(i[0]),window.location.reload()}catch(i){throw console.log(i),new Error("No ethereum object")}},R=async()=>{try{if(d){const{addressTo:i,amount:u,keyword:h,message:m}=e,F=T(),M=Z(u);await d.request({method:"eth_sendTransaction",params:[{from:r,to:i,gas:"0x5208",value:M._hex}]});const v=await F.addToBlockchain(i,M,m,h);l(!0),console.log(`Loading - ${v.hash}`),await v.wait(),console.log(`Success - ${v.hash}`),l(!1);const O=await F.getTransactionCount();y(O.toNumber()),window.location.reload()}else console.log("No ethereum object")}catch(i){throw console.log(i),new Error("No ethereum object")}};return o.exports.useEffect(()=>{W(),_()},[b]),f(k.Provider,{value:{transactionCount:b,connectWallet:q,transactions:g,currentAccount:r,isLoading:c,sendTransaction:R,handleChange:N,formData:e},children:t})},j=t=>`${t.slice(0,5)}...${t.slice(t.length-4)}`,p=({placeholder:t,name:e,type:a,value:r,handleChange:n})=>f("input",{placeholder:t,type:a,step:"0.0001",value:r,onChange:c=>n(c,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),x="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",C0=()=>{const{currentAccount:t,connectWallet:e,handleChange:a,sendTransaction:r,formData:n,isLoading:c}=o.exports.useContext(k),l=b=>{const{addressTo:y,amount:g,keyword:w,message:N}=n;b.preventDefault(),!(!y||!g||!w||!N)&&r()};return f("div",{className:"flex w-full justify-center items-center",children:s("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[s("div",{className:"flex flex-1 justify-start items-start flex-col mf:mr-10",children:[s("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto ",f("br",{})," across the world"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore the crypto world. Buy and sell cryptocurrencies easily on Seed Capital."}),!t&&s("button",{type:"button",onClick:e,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:[f(X,{className:"text-white mr-2"}),f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})]}),s("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${x}`,children:"Reliability"}),f("div",{className:x,children:"Security"}),f("div",{className:`sm:rounded-tr-2xl ${x}`,children:"Ethereum"}),f("div",{className:`sm:rounded-bl-2xl ${x}`,children:"Web 3.0"}),f("div",{className:x,children:"Low Fees"}),f("div",{className:`rounded-br-2xl ${x}`,children:"Blockchain"})]})]}),s("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ",children:s("div",{className:"flex justify-between flex-col w-full h-full",children:[s("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(f0,{fontSize:21,color:"#fff"})}),f(e0,{fontSize:17,color:"#fff"})]}),s("div",{children:[f("p",{className:"text-white font-light text-sm",children:j(t)}),f("p",{className:"text-white font-semibold text-lg mt-1",children:"Ethereum"})]})]})}),s("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(p,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:a}),f(p,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:a}),f(p,{placeholder:"Keyword (Gif)",name:"keyword",type:"text",handleChange:a}),f(p,{placeholder:"Enter Message",name:"message",type:"text",handleChange:a}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),c?f(i0,{}):f("button",{type:"button",onClick:l,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer",children:"Send now"})]})]})]})})},T0="s8MckzgQuZDQyDv2bNKauDR3OMlSzhlN",A0=({keyword:t})=>{const[e,a]=o.exports.useState(""),r=async()=>{var n,c;try{const l=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${T0}&q=${t.split(" ").join("")}&limit=1`),{data:b}=await l.json();a((c=(n=b[0])==null?void 0:n.images)==null?void 0:c.downsized_medium.url)}catch{a("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return o.exports.useEffect(()=>{t&&r()},[t]),e};var j0=[{id:1,url:"https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284",message:"",timestamp:"03/21/2022, 12:33:21 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"},{id:2,url:"https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif",message:"",timestamp:"03/21/2022, 12:30:20 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"},{id:3,url:"https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif",message:"",timestamp:"03/21/2022, 12:28:20 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"},{id:4,url:"https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif",message:"",timestamp:"03/21/2022, 12:23:56 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"},{id:5,url:"https://i.pinimg.com/originals/73/d3/a1/73d3a14d212314ab1f7268b71d639c15.gif",message:"",timestamp:"03/21/2022, 12:16:35 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"},{id:6,url:"https://www.omnisend.com/blog/wp-content/uploads/2016/09/funny-gifs-9.gif",message:"",timestamp:"03/21/2022, 12:08:45 PM",addressFrom:"0xCF8e569A97C423952DdFf902375C7C76549A6A90",amount:"0.01",addressTo:"0x4501d18bA0e29B368a0a54f697F379724c4519c0"}];const S0=({addressTo:t,addressFrom:e,timestamp:a,message:r,keyword:n,amount:c,url:l})=>{const b=A0({keyword:n});return f("div",{className:"bg-[#181918] m-4 flex flex-1\r 2xl:min-w-[450px]\r 2xl:max-w-[500px]\r sm:min-w-[270px]\r sm:max-w-[300px]\r min-w-full\r flex-col p-3 rounded-md hover:shadow-2xl",children:s("div",{className:"flex flex-col items-center w-full mt-3",children:[s("div",{className:"display-flex justify-start w-full mb-6 p-2",children:[f("a",{href:`https://ropsten.etherscan.io/address/${e}`,target:"_blank",rel:"noreferrer",children:s("p",{className:"text-white text-base",children:["From: ",j(e)]})}),f("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noreferrer",children:s("p",{className:"text-white text-base",children:["To: ",j(t)]})}),s("p",{className:"text-white text-base",children:["Amount: ",c," ETH"]}),r&&s(c0,{children:[f("br",{}),s("p",{className:"text-white text-base",children:["Message: ",r]})]})]}),f("img",{src:b||l,alt:"nature",className:"w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold",children:a})})]})})},k0=()=>{const{transactions:t,currentAccount:e}=o.exports.useContext(k);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:s("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[e?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Connect your account to see the latest transactions"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:[...j0,...t].reverse().map((a,r)=>f(S0,C({},a),r))})]})})},A=({color:t,title:e,icon:a,subtitle:r})=>s("div",{className:"flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:a}),s("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-1 text-white text-sm md:w-9/12",children:r})]})]}),F0=()=>f("div",{className:"flex w-full justify-center items-center gradient-bg-services",children:s("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[s("div",{className:"flex-1 flex flex-col justify-start items-start",children:[s("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient ",children:["Services that we",f("br",{}),"continue to improve"]}),f("p",{className:"text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base",children:"The best choice for buying and selling your crypto assets, with the various super friendly services we offer"})]}),s("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(A,{color:"bg-[#2952E3]",title:"Security gurantee",icon:f(t0,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"}),f(A,{color:"bg-[#8945F8]",title:"Best exchange rates",icon:f(a0,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"}),f(A,{color:"bg-[#F84550]",title:"Fastest transactions",icon:f(s0,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"})]})]})}),M0=()=>s("div",{className:"min-h-screen",children:[s("div",{className:"gradient-bg-welcome",children:[f(l0,{}),f(C0,{})]}),f(F0,{}),f(k0,{}),f(o0,{})]});n0.render(f(v0,{children:f(M0,{})}),document.getElementById("root"));
