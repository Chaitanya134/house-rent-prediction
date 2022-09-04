import React from 'react'
import axios from 'axios'

const HouseForm = () => {

    async function getPrediction(houseData) {
        const response = await axios.post(process.env.REACT_APP_API_URL + "predict", houseData);
        const data = response.data;
        document.getElementById("rent").innerHTML = `Your rent is: <span>${Math.round(data)}<span>`;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const houseData = {};
        document.querySelectorAll(".form-group input").forEach(input => {
            let value = input.value;
            if (input.type === "checkbox") {
                value = input.checked ? 1 : 0;
            }
            houseData[input.name] = value;
        })
        document.querySelectorAll(".form-group select").forEach(select => {
            if (select.classList.contains("one-hot")) {
                select.querySelectorAll("option").forEach((option, index) => {
                    houseData[option.value] = index === select.selectedIndex ? 1 : 0;
                })
            } else {
                houseData[select.name] = select.value;
            }
        })

        getPrediction(houseData);
    }

    return (
        <section className='house-form-container'>
            <h1>Know your House Rent</h1>
            <p>Fill this form and click on the get prediction button to know the rent!</p>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Locality</label>
                    <input name="locality" placeholder='Locality' />
                </div>
                <div className='form-group'>
                    <label>Type</label>
                    <select name="type">
                        <option value="2">BHK1</option>
                        <option value="1">BHK2</option>
                        <option value="0">BHK3</option>
                        <option value="3">BHK4</option>
                        <option value="4">BHK4+</option>
                        <option value="5">RK1</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Latitude</label>
                    <input name="latitude" placeholder='Latitude' step="any" type="number" />
                </div>
                <div className='form-group'>
                    <label>Longitude</label>
                    <input name="longitude" placeholder='Longitude' step="any" type="number" />
                </div>
                <div className='form-group'>
                    <label>Lease Type</label>
                    <select name="lease_type">
                        <option value="3">Family</option>
                        <option value="1">Bachelor</option>
                        <option value="2">Company</option>
                        <option value="0">Anyone</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Gym</label>
                    <input name="gym" type="checkbox" />
                </div>
                <div className='form-group'>
                    <label>Lift</label>
                    <input name="lift" type="checkbox" />
                </div>
                <div className='form-group'>
                    <label>Swimming Pool</label>
                    <input name="swimming_pool" type="checkbox" />
                </div>
                <div className='form-group'>
                    <label>Negotiable</label>
                    <input name="negotiable" type="checkbox" />
                </div>
                <div className='form-group'>
                    <label>Furnishing</label>
                    <select name="furnishing">
                        <option value="2">Semi Furnished</option>
                        <option value="0">Fully Furnished</option>
                        <option value="1">Not Furnished</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Parking</label>
                    <select name="parking">
                        <option value="3">Two Wheeler</option>
                        <option value="1">Four Wheeler</option>
                        <option value="0">Both</option>
                        <option value="2">None</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Property Size</label>
                    <input name="property_size" placeholder='Property Size' type="number" />
                </div>
                <div className='form-group'>
                    <label>Property Age</label>
                    <input name="property_age" placeholder='Property Age' type="number" />
                </div>
                <div className='form-group'>
                    <label>Bathroom</label>
                    <input name="bathroom" placeholder='Bathroom' type="number" />
                </div>
                <div className='form-group'>
                    <label>Cupboard</label>
                    <input name="cup_board" placeholder='Cupboard' type="number" />
                </div>
                <div className='form-group'>
                    <label>Floor</label>
                    <input name="floor" placeholder='Floor' type="number" />
                </div>
                <div className='form-group'>
                    <label>Total Floor</label>
                    <input name="total_floor" placeholder='Total Floor' type="number" />
                </div>
                <div className='form-group'>
                    <label>Balconies</label>
                    <input name="balconies" placeholder='Balconies' type="number" />
                </div>
                <div className='form-group'>
                    <label>Activation Date</label>
                    <input name="activation_date" type="date" />
                </div>
                <div className='form-group'>
                    <label>Facing</label>
                    <select name="facing" className='one-hot'>
                        <option value="N">N</option>
                        <option value="S">S</option>
                        <option value="E">E</option>
                        <option value="W">W</option>
                        <option value="NE">NE</option>
                        <option value="NW">NW</option>
                        <option value="SE">SE</option>
                        <option value="SW">SW</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Water Supply</label>
                    <select name="water_supply" className='one-hot'>
                        <option value="CORP_BORE">CORP BORE</option>
                        <option value="CORPORATION">CORPORATION</option>
                        <option value="BOREWELL">BOREWELL</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Building Type</label>
                    <select name="building_type" className='one-hot'>
                        <option value="AP">AP</option>
                        <option value="IH">IH</option>
                        <option value="IF">IF</option>
                        <option value="GC">GC</option>
                    </select>
                </div>
                <h3>Amenities</h3>
                <div className='amenities'>
                    <div className='form-group'>
                        <label>Lift</label>
                        <input name="amenityLIFT" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Gym</label>
                        <input name="amenityGYM" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Internet</label>
                        <input name="amenityINTERNET" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>AC</label>
                        <input name="amenityAC" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Club</label>
                        <input name="amenityCLUB" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Intercom</label>
                        <input name="amenityINTERCOM" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Pool</label>
                        <input name="amenityPOOL" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>CPA</label>
                        <input name="amenityCPA" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>FS</label>
                        <input name="amenityFS" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Servant</label>
                        <input name="amenitySERVANT" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Security</label>
                        <input name="amenitySECURITY" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>SC</label>
                        <input name="amenitySC" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>GP</label>
                        <input name="amenityGP" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>Park</label>
                        <input name="amenityPARK" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>RWH</label>
                        <input name="amenityRWH" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>STP</label>
                        <input name="amenitySTP" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>HK</label>
                        <input name="amenityHK" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>PB</label>
                        <input name="amenityPB" type="checkbox" />
                    </div>
                    <div className='form-group'>
                        <label>VP</label>
                        <input name="amenityVP" type="checkbox" />
                    </div>
                </div>
                <button type="submit">Get Prediction</button>
            </form>
            <h2 id="rent" className='d-none prediction'></h2>
        </section>
    )
}

export default HouseForm