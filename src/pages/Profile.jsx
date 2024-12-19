import React, { useState } from 'react';

const Profile = ({ theme }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: 'Minhaz Ahmed',
          email: 'minhazahmed123@gmail.com',
          bio: 'Onwer and Head',
          phone: '99013696969',
          location: 'New York, USA',
        };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('profileImage') || 'https://via.placeholder.com/150';
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem('profileImage', imageUrl);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-12`} data-theme={theme}>
      <div className="w-full max-w-5xl bg-base-200 shadow-xl rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-secondary to-primary text-white text-center py-8">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <p className="mt-2">Manage and update your profile information</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start p-8">
          {/* Profile Picture Section */}
          <div className="w-full lg:w-1/3 flex flex-col items-center gap-4">
            <div className="relative w-40 h-40">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full border-4 border-accent shadow-lg object-cover w-full h-full"
              />
              <label
                htmlFor="image-upload"
                className="absolute bottom-0 right-0 bg-primary p-2 rounded-full text-white cursor-pointer shadow-md"
              >
                <i className="fas fa-camera"></i>
              </label>
              <input
                id="image-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <p className="text-sm text-gray-500">Click the camera icon to upload a new picture</p>
          </div>

          {/* Profile Details Section */}
          <div className="w-full lg:w-2/3">
            <div className="p-6 bg-base-100 rounded-lg shadow-sm">
              {!isEditing ? (
                <div className="space-y-4">
                  <p className="text-lg">
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p className="text-lg">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-lg">
                    <strong>Bio:</strong> {user.bio}
                  </p>
                  <p className="text-lg">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p className="text-lg">
                    <strong>Location:</strong> {user.location}
                  </p>
                  <button
                    className="mt-6 btn btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="form-control">
                    <label className="label text-sm">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={updatedUser.name}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-sm">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={updatedUser.email}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-sm">Bio</label>
                    <textarea
                      name="bio"
                      value={updatedUser.bio}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label text-sm">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={updatedUser.phone}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-sm">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={updatedUser.location}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      className="btn btn-primary"
                      onClick={handleSave}
                    >
                      Save Changes
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;