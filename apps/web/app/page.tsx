import prisma from "@repo/db/prisma"


export default async function Page() {
  const user = await prisma.user.findFirst()

  return (
    <main className="flex flex-col justify-center items-center mt-20 text-4xl font-semibold">
      <div>Id: {user?.id}</div>
      <div>Name: {user?.name}</div>
      <div>Username: {user?.username}</div>
      <div>Password: {user?.password}</div>
    </main>
  );
}
