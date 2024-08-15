import "./Banner.css"

function Banner() {
    return [
        <>
        <section className="banner" style={
            {
                backgroundImage: `url("https://fastcdn.hoyoverse.com/content-v2/plat/124863/91e28663dbe5d1c2272bb6e9672e845f_8300370323694878574.jpeg?x-oss-process=image/resize")`
            }
        }>
            <div className="banner-info">
                <img src="https://webstatic.hoyoverse.com/upload/op-public/2022/02/08/1c77d507474b5a773ef9741ff9d840f0_2195000568465664776.jpeg" alt="" />
                <h3>Genshin Impact</h3>
                <h1>Latest updates on verion 4.8 &quot;Summertides Scales and Tales&quot;</h1>
                <button>More</button>
            </div>
        </section>
        </>
    ]
}

export default Banner;