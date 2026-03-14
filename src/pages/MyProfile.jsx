import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/auth";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });

         if (!name || !photo) {
              Swal.fire({
                icon: "error",
                title: "Please fill all fields",
              });
              return;
            }
        
            Swal.fire({
              icon: "success",
              title: "Toy request submitted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

        <img
          src={user?.photoURL}
          alt="user"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <p className="text-center font-semibold">{user?.displayName}</p>
        <p className="text-center text-gray-500 mb-4">{user?.email}</p>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full mb-3"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <button className="btn bg-yellow-400 w-full">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
