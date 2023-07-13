import Button from "./Button"

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰 Bill Value</label>
      <input type="text" />

      <label htmlFor="">🧔🏻‍♂️Your expense</label>
      <input type="text" />

      <label htmlFor="">🙂 {selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Who is paying the bill</label>
      <select id="" value="you" onChange={() => { }}>
        <option value="you">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button>Add</Button>
    </form>
  )
}

export default FormSplitBill