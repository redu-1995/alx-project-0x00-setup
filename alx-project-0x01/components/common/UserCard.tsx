import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">@{username}</p>
      <p className="text-gray-700"><strong>Email:</strong> {email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {phone}</p>
      <p className="text-gray-700"><strong>Website:</strong> <a href={`https://${website}`} className="text-blue-500 underline" target="_blank">{website}</a></p>
      <div className="mt-2 text-sm text-gray-600">
        <p><strong>Address:</strong> {address.street}, {address.city}</p>
        <p><strong>Company:</strong> {company.name} — <em>{company.catchPhrase}</em></p>
      </div>
    </div>
  );
};

export default UserCard;
