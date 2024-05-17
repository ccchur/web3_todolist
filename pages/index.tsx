import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Wallet from "./wallet";
import { useState, useEffect } from "react";
import { useWriteContract, useReadContract } from "wagmi";
import { contractData } from "../contracts/data";
import Alert from "../components/Alert";
import React from "react";

 
const Home: NextPage = () => {
	const [todo, setTodo] = useState("");
	const [isMessage, setIsMessage] = useState(false);

  const { writeContract, status } = useWriteContract();
  
 

	useEffect(() => {
		if (isMessage) {
			setTimeout(() => {
				setIsMessage(false);
			}, 3000);
		}
	}, [isMessage]);

  function onSuccess() {
		setIsMessage(true)
    setTodo("");
  }

	function onError() {
		console.log("Error");
	}
		return (
      <div className="flex justify-center mt-7">
        <main className="flex justify-center static flex-col p-2 bg-[#f0f1f5] rounded-md">
          {isMessage && <Alert />}
          <ConnectButton />
          <h1 className="m-4 text-center text-[32px] font-bold">Input Todo</h1>
          <div className="h-[400px] overflow-auto ">
            <Wallet doMsg={onSuccess} />
          </div>
          <div className="flex justify-around w-[500px] pt-[10px]">
            <input
              className="input input-bordered w-[73%] max-w-xs"
              type="text"
              placeholder="Add Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />

            {status === "pending" && (
              <button className="btn">
                <span className="loading loading-spinner"></span>
                loading
              </button>
            )}
            {status !== "pending" && (
              <button
                className="btn btn-success bg-[#0078fc] text-white w-[24%] text-[18px] font-semibold"
                onClick={() => {
                  return writeContract(
                    {
                      abi: contractData.abi,
                      address: contractData.address,
                      functionName: "addTodoItem",
                      args: [todo],
                    },
                    { onSuccess, onError }
                  );
                }}
              >
                Add Todo
              </button>
            )}
          </div>
        </main>
      </div>
    );
};

export default Home;
