import './TransferFund.scss'

export const TransferFund = ({contactName ,handleChange, onTransferCoins  }) => {

    return (
        <div className= "transfer-fund">
        <h4> Transfer coins to: {contactName} </h4>
        <form action="" onSubmit={onTransferCoins}>
        <label htmlFor="amount">Amount:</label>
        <input type="number"  id="amount" onChange={handleChange} name="amount" />
        <button className="el-btn btn">Transfer</button>
        </form>
        </div>
    )
}

