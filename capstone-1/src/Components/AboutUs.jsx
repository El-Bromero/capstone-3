import React from 'react';
import './AboutUs.css';
import garden from '../Images/garden.jfif'

function AboutUs() {
    return (
        <div className="aboutUs">
            {/* Goofy and simple about us page */}
            <h1 className="aboutUs-title">About Us 🌳</h1>
            <p>We grow the best that Mother Earth can provide to us. We carefully grow the best plants for whatever your needs may be. Other leading companies do not provide the same service that we provide. You will feel like the plants were cultivated in perfect conditions.</p>
            <br/>
            <p>Our founder Veg E. Tales said it best: <i>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</i>
            </p>
            <img className="aboutUs-img" src={garden} alt="" />
        </div>
    )
}

export default AboutUs;
