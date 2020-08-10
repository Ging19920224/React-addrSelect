class ReceiptType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receiptType: 2,
            taxId: '',
            receiptOptions: ["byMail"],
        }
    }
    handler = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value}, () => {
            
        })
    }
    arrayHandler = (e) => {

    }
    render = () => {
        return(
            <div>
                <span>發票類型</span><br />
                <label>
                    <input 
                        type="radio" 
                        name="receiptType" 
                        value="2" 
                        checked={this.state.receiptType === 2}
                        onChange={this.handler}
                    />
                    個人
                </label><br />
                <label>
                    <input 
                        type="radio" 
                        name="receiptType" 
                        value="3" 
                        checked={this.state.receiptType === 3}
                        onChange={this.handler}
                    />
                    公司
                    統一編號
                    <input type="text" name="taxId" value={this.state.taxId}/>
                </label>
                <br />
                <br />
                <div>
                    <span>郵寄選項</span><br />
                    <label>
                        <input 
                            type="checkbox" 
                            name="receiptOptions[]" 
                            value="byMail" 
                            checked={ this.state.receiptOptions.includes("byMail")} 
                        />
                        實體寄送(+ $30)
                    </label>
                    <br />
                    <label>
                        <input 
                        type="checkbox" 
                        name="receiptOptions[]"  
                        value="promptRegistered" 
                        checked={ this.state.receiptOptions.includes("promptRegistered")}
                    />
                        限時掛號(再 + $30 = 60)
                    </label>
                    <br />
                </div>
            </div>
        )
    }
}

export default ReceiptType;