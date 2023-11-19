const Profile = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-4 grid-flow-col pl-2">
      <div className="justify-self-center row-span-2 h-[55px] w-[55px]">
        <img
          className="rounded-full"
          alt="Profile Icon"
          src="https://d1w2poirtb3as9.cloudfront.net/default.jpeg?Expires=1700219063&Signature=eFauZoIUxBRrI5bZcKLRhJpMdL3--nKRN3tolMBz6SnwGZZSU7wHE4s8oC~qPGoNUYaVHlMZ3P932do1BngUqTXOcAEw2zpsfeUJvrK5XT8t~x18jDos-TphsNx1a63ZfP8gQVIdwsT6ifX6TDmX2HTM7w97kkSa8UzPPWWvMY88tCB~hd90R-ISuDStwX72lqwrFQ7wohG66Bu0NDhBnuzpJX55d27~s4-Q~MqL28yXtDDzS0J2DlMlzS8HwVTAxWsXd~EZ3c7ohGMpBaWtR7nIuM6pvcHNQPwirhcMDi25B6hyj29qVVUFJ1pXSOE4XMmuFKkaDrW4anvtPP6VIA__&Key-Pair-Id=K36LFL06Z5BT10"
        />
      </div>
      <div className="text-lg col-span-3 self-end">UserName</div>
      <a href=".." className="col-span-3 self-start text-green-700 font-medium">
        Manage account
      </a>
    </div>
  );
};

export default Profile;
