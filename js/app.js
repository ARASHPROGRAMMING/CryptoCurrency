const root = document.querySelector(".root");
const apiCrypto =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,litecoin,ripple,cardano,polkadot,binancecoin,solana,shiba-inu,monero,stellar,uniswap,chainlink,vechain,algorand,zcash,dogecoin,tron,bitcoin-cash,ethereum-classic,cosmos,tezos,neo,dash,yearn-finance,maker,compound,pancakeswap,busd,shiba,elrond,helium,sushiswap,quickswap,polygon,cosmos,safemoon,celo,uniswap,vault,decenex,fantom,arweave,bancor,renrenbit,litentry,earthquake,powr,klaytn,gala,axie-infinity,bittorrent,curve-finance,serum,tether-usd,sushi,helios,thunder-core,greentrust,terra,stargate,poly,uma,lido,flow,busd,1inch,compound,reef,frax,opensea,dodo,renren,flux,frax,crypto-com-chain,render-token,lido,alpha-finance";

let previousPrices = {};

function cryptoUpdate() {
    fetch(apiCrypto)
    .then(res => res.json())
    .then(data => {
        let temp = data
            .map(items => {
                // مقایسه قیمت قبلی و فعلی
                const previousPrice = previousPrices[items.id] || items.current_price;
                const color = items.current_price > previousPrice ? 'green' : items.current_price < previousPrice ? 'red' : 'white';
                
                // ذخیره قیمت جدید برای مقایسه در بروزرسانی بعدی
                previousPrices[items.id] = items.current_price;

                return `
                    <div class="card">
                        <div class="image__card">
                            <img id="card__img" src="${items.image}" alt="${items.name}" width="100" height="100">
                        </div>
                        <div class="text__card">
                            <h3 id="name__card">Name: ${items.name}</h3>
                            <h3 id="price__card" style="color:${color};">Price: $${items.current_price}</h3>
                        </div>
                    </div>
                `;
            })
            .join("");

        root.innerHTML = temp;  
    });
}

cryptoUpdate();
setInterval(cryptoUpdate, 60000);
