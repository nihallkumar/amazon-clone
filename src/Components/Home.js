import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className='home_container'>

                <img className='home_img' src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" alt='' />

                <div className="home_row">
                    <Product id="11" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={1129} image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating={5} />

                    <Product id="12" title='LG Gram Intel Evo 11th Gen Core i7 17 inches Ultra-Light Laptop' price={154923} image='https://m.media-amazon.com/images/I/511fq-ANHxL._SX679_.jpg' rating={5} />

                    <Product id="13" title='EDICT by Boat DynaBeats EWH01 Wireless Bluetooth On Ear Headphone with Mic (Black)' price={8719} image='https://m.media-amazon.com/images/I/51nCZCTu6XS._SX679_.jpg' rating={4} />
                </div>

                <div className="home_row">
                    <Product id="14" title="SanDisk Ultra Dual 32GB USB 3.0 OTG Pen Drive" price={3700} image="https://m.media-amazon.com/images/I/71bV203ASmL._SX679_.jpg" rating={4} />

                    <Product id="15" title="D-Link DIR-X1560 AX 1500 MU-MIMO Dual Band Wi Fi 6 Router, 5 Gigabit Port, 4 External Antenna, Voice Control Compatible, Parental Control" price={12469} image="https://m.media-amazon.com/images/I/51m6DS2cGpL._SX679_.jpg" rating={4} />
                </div>

                <div className="home_row">
                    <Product id="16" title='Acer Predator 27-inch 4K UHD (3840 x 2160) IPS 1MS 144 Hz Gaming Monitor with NVIDIA G-SYNC Compatible, VESA Display HDR 400, 90% DCI-P3, 2 x HDMI, 2 x DP, USB HUB - XB273K (Black)' price={289900} image="https://m.media-amazon.com/images/I/61qRFRfA9cS._SX679_.jpg" rating={4} />
                </div>

            </div>
        </div>
    )
}

export default Home