
const Cnav = () => {
    return (
        <div className="cnav">
            <div className="logonav">
                <img src="assets/Logo.svg" alt="" />
            </div>
            <div className="navmenues">
                <select name="Features" id="NavSelect">
                    <option value="1">Features</option>

                </select>
                <a href="">Developers</a>
                <select name="Company" id="NavSelect">
                    <option value="1">Company</option>

                </select>
                <a href="">Blog</a>
                <a href="">Changelog</a>

            </div>
            <div className="button">
                <button type="button"><img src="assets/CTA.svg" alt="" /></button>
            </div>
        </div>
    )
}
export default Cnav