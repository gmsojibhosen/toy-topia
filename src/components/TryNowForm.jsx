import React from "react";
import Swal from "sweetalert2";

const TryNowForm = () => {
  const handleTryNow = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    if (!name || !email) {
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

    form.reset();
  };

  return (
    <div className="mt-8 p-6 bg-base-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Try This Toy</h2>

      <form onSubmit={handleTryNow}>
        <fieldset className="fieldset w-full">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input w-full"
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input w-full"
          />

          <button type="submit" className="btn mt-4 bg-yellow-400">
            Try Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default TryNowForm;
