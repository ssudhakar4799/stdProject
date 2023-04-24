import './Listcourses.css'
const Listcourse = (props) => {
    let dataPorps = props.data;
    console.log(dataPorps);
    return (
        <ul className="list-group list-group-flush">
            {dataPorps.map((item) => {
                return <li className="list-group-item" key={item.topicNo}>
                    <div className='seprate'>
                        <div>
                            <h6>{item.topic}</h6>
                        </div>
                        <div>
                            {
                                item.url === "" && item.isCompleted !== true ? (<>
                                    <a className='log' href="#" ><i className="fa-brands fa-youtube you-tube"></i></a>
                                    <span className='crl-noActive'>
                                    </span>
                                </>
                                ) : (<>

                                    <a className='log' href={item.url} ><i className="fa-brands fa-youtube text-danger"></i></a>
                                    <span className='crl'>
                                    </span>
                                </>
                                )
                            }
                        </div>
                    </div>
                </li>
            })}
        </ul>
    )
}
export default Listcourse;