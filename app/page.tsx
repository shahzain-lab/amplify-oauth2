import Image from "next/image";
import { getAuthUser, getFetchUserAttr } from "./components/amplify-utils";

export default async function Home() {
  const user = await getFetchUserAttr()
  console.log(user)
  return (
    <div>{user.email}</div>
  );
}
