import React from 'react'

const Card = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='container d-flex justify-content-start gap-2 w-100'>
                        <select className='p-1 bg-info rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='p-1 bg-info rounded'>

                            <option value='qty'>Qty</option>
                            <option value='half'>Half</option>
                            <option value='full'>Full</option>

                        </select>
                        <div>Total Price</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
