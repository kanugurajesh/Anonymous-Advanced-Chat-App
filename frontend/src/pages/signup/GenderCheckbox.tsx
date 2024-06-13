const GenderCheckbox = () => {
  return (
    <div className="flex gap-4">
      <div className="">
        <label className="flex items-center justify-center gap-1">
          <span className="font-semibold">Male</span>
          <input type="checkbox" className="w-[20px] h-[20px] rounded-md" />
        </label>
      </div>
      <div className="">
        <label className="flex items-center justify-center gap-1">
          <span className="font-semibold">Female</span>
          <input type="checkbox" className="w-[20px] h-[20px]" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
