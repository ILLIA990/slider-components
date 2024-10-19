import { media } from "../data/media.jsx";
import PropTypes from "prop-types";

export default function Block({ id }) {
    const data = media.find((item) => item.id === id);

    return (
        <div className="mobile-block">
            <div className="container-0001">
                <div className="container-title-0002">
                    <img src={data.logo} alt="Logo" />
                    <div className="container-title-0003">
                        <h1>{data.title}</h1>
                    </div>
                </div>

                <div className="container-info-0004">
                    <div className="container-info-0005">
                        <img className="block-image" src={data.photo} alt="Block" />
                        <div className="container-info-0006">
                            {Object.keys(data.text).map((key) => (
                                <div className="container-info-0007" key={key}>
                                    <img src={data.textlogo} alt={`Text ${key} logo`} />
                                    <h4>{data.text[key]}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Block.propTypes = {
    id: PropTypes.number.isRequired,
};
