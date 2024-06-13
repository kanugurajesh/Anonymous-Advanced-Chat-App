const GenderCheckbox = ({ onCheckboxChange, selectedGender }: any) => {
  return (
    <div className="flex gap-4">
      <div className="">
        <label
          className={`label flex items-center justify-center gap-1 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="font-semibold">Male</span>
          <input
            type="checkbox"
            className="w-[20px] h-[20px] rounded-md"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="">
        <label className="label flex items-center justify-center gap-1">
          <span className="font-semibold">Female</span>
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
