import TaiwanPostalCode from './TaiwanPostalCode.json'

class AddressPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '新竹市',
            district: '',
            postalCode: '',
            address:　'',
        }
        this.postalCode = TaiwanPostalCode;
        this.cities = Object.keys(this.postalCode);
    }

    handlerRelated = (name, value) => {
        let mergeObject = {};

        if (name == 'city' && this.state.city != value) {
            mergeObject['district'] = '';
            mergeObject['postalCode'] = '';
        } else if (name == 'district' && this.state.district != value) {
            const cityData = this.postalCode[this.state.city];
            const postalCode = cityData[value];
            mergeObject['postalCode'] = postalCode;
        }

        return mergeObject;
    }

    handler = (e) => {
        let {name, value} = e.target;
        
        const mergeObject = this.handlerRelated(name, value);
        
        this.setState({ ...mergeObject, [name]: value}, () => {
            console.log(this.state);
        });
    }

    getCityOptions = (cities) => {
        return cities.map((city) => {
            return (<option key={city} value={city}>{city}</option>)
        });
    }

    getDistrictOptions = (districts) => {
        return districts.map((city) => {
            return (<option key={city} value={city}>{city}</option>)
        });
    }
    
    render = () => {
        const cityOptions = this.getCityOptions(this.cities);
        const cityData = this.postalCode[this.state.city];
        const districts = Object.keys(cityData);
        const districtsOptions = this.getDistrictOptions(districts);
        return (
            <div>
                <label>
                    城市
                    <select 
                        name="city" 
                        onChange={this.handler} 
                        value={this.state.city}
                    >
                        {cityOptions}
                    </select>
                </label>
                <br />
                <label>
                    市/區
                    <select 
                        name="district" 
                        onChange={this.handler} 
                        value={this.state.district}
                    >
                        {districtsOptions}
                    </select>
                </label>
                <label>
                    郵遞區號
                    <input 
                        type="text" 
                        name="postalCode" 
                        value={this.state.postalCode}
                        disabled={true}
                    />
                </label>
                <br />
                <label>
                    <input 
                        type="text" 
                        name="address"
                        onChange={this.handler}
                        value={this.state.address}
                    />
                </label>
            </div>
        )
    }
}

export default AddressPicker;