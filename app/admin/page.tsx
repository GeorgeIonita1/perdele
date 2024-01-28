// fix typescript
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function Admin() {
    const { sessionClaims }: any = auth();

    if (sessionClaims?.metadata.role !== "admin") {
        redirect("/");
    }

    return (
        <div>admin page</div>
    );
}

export default Admin;
