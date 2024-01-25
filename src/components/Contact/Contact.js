import React from 'react';
import call from '../../assets/Group 1171275317.png';
import msg from '../../assets/Group 1171275318.png';
import location from '../../assets/Group 1171275321.png';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="mt-16">
      <div className="text-center border-dashed border border-gray-300 p-4">
        <h2 className="text-4xl font-bold">Get In Touch</h2>
        <p className="p-4 text-gray-500">
          Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis
          placerat <br /> dolor. Purus urna in sit nullam proin.{' '}
        </p>
      </div>
      <div className="border mt-4 sm:flex sm:space-x-60 w-full border-black">
        <div className="m-4 p-4 ">
          <div className=" bg-green-100 sm:w-[500px] mt-4 rounded-lg p-4">
            <img src={call} alt="call" className="" />
            <p className="text-gray-500 mt-4">Phone number :</p>
            <p className="text-xl font-bold mt-3">(+88) 123 345 643</p>
          </div>
          <div className="bg-yellow-100 sm:w-full mt-4 rounded-lg p-4">
            <img src={msg} alt="call" />
            <p className="text-gray-500 mt-4">Email :</p>
            <p className="text-xl font-bold">hockeys@gmail.com</p>
          </div>
          <div className="bg-blue-100 w-full mt-4 rounded-lg p-4">
            <img src={location} alt="call" />
            <p className="text-gray-500 mt-4">Location :</p>
            <p className="text-xl font-bold mt-4">
              152/1 Mohakhali WireLess Gate
            </p>
          </div>
        </div>
        <div className="m-4 sm:m-4 border-4 border-black  sm;p-12 ">
          <div className="max-w-md mx-auto mt-8 p-4   sm:gap-10  grid sm:grid-cols-2 ">
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-xl font-bold text-gray-600"
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full  border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your Subject"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            {/* <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div> */}

            {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit
      </button> */}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              placeholder="Enter your msg"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button className="bg-red-600 text-white py-2 px-4 rounded-md w-full hover:bg-red-500">
            Submit
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold">Socail meida</p>
      </div>
    </div>
  );
};

export default Contact;
