interface Props {
  name: any;
  id: any;
  price: any;
  symbol: any;
  marketcap: any;
  volume: any;
  image: any;
  priceChange: any;
}

const Coins = ({ name }: Props) => {
  return (
    <div>
      <h1>Coin: {name}</h1>
    </div>
  );
};

export default Coins;
