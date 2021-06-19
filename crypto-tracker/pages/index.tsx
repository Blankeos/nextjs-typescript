import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Coins from "../components/Coins";
import SearchBar from "../components/SearchBar";
import { GetServerSideProps } from "next";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

interface Props {
  filteredCoins: any;
}

export default function Home({ filteredCoins }: Props) {
  const [search, setSearch] = useState("");

  const allCoins = filteredCoins.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearch(e.currentTarget.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleSearch} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

//
