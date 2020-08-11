import AddressPicker from './AddressPicker.jsx';
import ReceiptType from './ReceiptType.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ReceiptTypeIsReady: false,
            addressPickerIsReady: false
        }
    }
    
    isReady = () => {
        return this.state.ReceiptTypeIsReady && this.state.addressPickerIsReady;
    }

    updateIsReceiptTypeReady = (value) => {
        this.setState({"ReceiptTypeIsReady": value});
    }

    updateIsAddressPickerReady = (value) => {
        this.setState({"addressPickerIsReady": value});
    }
    render = () => {
        return (
            <form>
                <ReceiptType updateIsReceiptTypeReady={this.updateIsReceiptTypeReady} />
                <hr />
                <AddressPicker updateIsAddressPickerReady={this.updateIsAddressPickerReady} />
                <button type="submit" disabled={!this.isReady()}>submit</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));