import { useWriteContract } from "wagmi";
import { contractData } from "../contracts/data";

export default function Item(props: { id: number, name: string, fn:any}) {
  const { writeContract } = useWriteContract();
  function onSuccess() {
      props.fn();
    }
    return (
      <div className="flex justify-between items-center bg-white m-auto mb-[8px] p-[5px] w-[80%] rounded-md">
        <div className="text-[18px]">{props.name}</div>
        <button
          className="btn btn-error text-[18px]"
          onClick={() =>
            writeContract(
              {
                abi: contractData.abi,
                address: contractData.address,
                functionName: "deleteTodoItem",
                args: [props.id],
              },
              {onSuccess }
            )
          }
        >
          Delete
        </button>
      </div>
    );
}
