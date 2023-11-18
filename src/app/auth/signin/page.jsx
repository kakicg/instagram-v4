import { getProviders, signIn } from "next-auth/react";

export default async function signin({ providers}) {
  
  return (
    <div>
      <h1>Signin Page</h1>
    </div>
  )
}
export async function getServerSideProps(context) {
  const providers = await getProviders( context);
  return {
    props: { providers },
  };
}

