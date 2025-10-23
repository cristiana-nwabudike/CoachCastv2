export default function Invite() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Invite to Couch</h2>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="font-semibold">Your Couch Buddies</h3>
        <ul><li>Alex</li><li>Jamie</li></ul>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="font-semibold">Pending Invites</h3>
        <ul><li>Chris (pending)</li></ul>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="font-semibold">Invite New Buddy</h3>
        <input className="p-2 rounded w-full mt-2" placeholder="Enter email" />
        <button className="bg-accent text-black px-4 py-2 rounded mt-2">Send Invite</button>
      </div>
    </div>
  );
}
