import { Items, UserInfo, UserTop } from "./components";
import { useQuery } from "@tanstack/react-query";
import { apiSdk } from "../../../utils/api.utils";
import { useParams } from "react-router-dom";
import { Address } from "ton-core";

const User = () => {
  const { username } = useParams();

  const { isPending, data: user } = useQuery({
    queryKey: [`${username}-data`],
    queryFn: () => apiSdk.findOne(username!),
  });

  return (
    <section>
      {isPending ? (
        "loading"
      ) : user == undefined ? (
        "error bro"
      ) : user == null ? (
        "not found"
      ) : (
        <>
          <UserTop user={user} />
          <UserInfo user={user} />
          <Items address={Address.parse(user.address)} />
        </>
      )}
    </section>
  );
};

export default User;
