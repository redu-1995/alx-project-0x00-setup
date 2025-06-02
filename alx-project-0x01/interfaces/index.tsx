// Post Interface
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Post Modal Props
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// User Interface
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Optional User Data (for form submission)
export interface UserData {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

// User Modal Props
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: UserData) => void;
}
