import './Regions.css'


function Regions() {

  return (
    <>
      <div className="Regions">

        <section className="Regions">
          <ul className="RegionGrid">
            <li className="RegionCard">
              <div className="RegionImg">
                <div className='RegionContainer'>
                  <a>
                    <img
                      className="RNorte"
                      src="https://images.unsplash.com/photo-1703658648036-c728d41361de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>
                  <p className="RegionTitle">Región Norte</p>
                </div>

                <div className='RegionContainer'>
                  <a>
                    <img
                      className="REste"
                      src="https://images.unsplash.com/photo-1637407414190-dfc2d02b2435?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>
                  <p className="RegionTitle">Región Este</p>
                </div>

                <div className='RegionContainer'>
                  <a>
                    <img
                      className="RSur"
                      src="https://images.unsplash.com/photo-1722271587282-4b9536b35a1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>
                  <p className="RegionTitle">Región Sur</p>
                </div>

                <div className='RegionContainer'>
                <a>
                  <img
                    className="ROeste"
                    src="https://images.unsplash.com/uploads/141362941583982a7e0fc/abcfbca1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  </a>
                  <p className="RegionTitle">Región Oeste</p>
</div>

              </div>
            </li>

          </ul>
        </section>

      </div>
    </>
  )
}

export default Regions