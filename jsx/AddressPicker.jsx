import TaiwanPostalCode from './TaiwanPostalCode.json'

class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "新竹市"
        }

        this.postalCode = TaiwanPostalCode
        this.cities = Object.keys(this.postalCode)
    }
    handler = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    getCityOptions = (cities) => {
        return cities.map((city) => {
            return (<option key={city} value={city}>{city}</option>)
        })
    }

    render = () => {
        const cityOptions = this.getCityOptions(this.cities)
        return (
            <div>
                <label>
                    城市
                    <select name="city"
                        onChange={this.handler}
                        value={this.state.city}
                        >
                        {cityOptions}
                    </select>
                </label>
                <br />
                <label>
                    市/區
                    <select>
                        <option>中正區</option>
                        <option>大同區</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default AddressPicker;