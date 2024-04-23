import axios from "axios";

async function getUserDetail(){
  const response = await axios.get("http://localhost:3000/api/user/");
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserDetail();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
