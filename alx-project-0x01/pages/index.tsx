import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState(posts);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const fakeId = users.length + 1;
    setUsers([
      ...users,
      {
        id: fakeId,
        ...newUser,
        address: {
          ...newUser.address,
          suite: "",
          zipcode: "",
          geo: { lat: "", lng: "" }
        },
        company: {
          ...newUser.company,
          catchPhrase: "",
          bs: ""
        }
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            className="bg-green-700 px-4 py-2 rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
        <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAddUser={handleAddUser} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
