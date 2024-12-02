

const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-slate-100 p-10 rounded-box my-16">
      <div>
        <h2 className="text-6xl mb-8">Books to freshen up <br /> your bookshelf</h2>
        <button className="btn bg-[#23BE0A] text-white border-none rounded-xl">View The List</button>
      </div>
      <div>
        <img src='https://i.ibb.co/ZMbXtHw/bookimg.png' alt="" />
      </div>

    </div>
  );
};

export default Banner;