import { useState } from "react"

const Section = ({ title, desc }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [btnText, setBtnText] = useState("Show");

    const handleBtn = () => {
        if (isVisible === false) {
            setIsVisible(true);
            setBtnText("Hide");
        }
        else {
            setIsVisible(false);
            setBtnText("Show");
        }

        // setIsVisible(!isVisible);
        // setBtnText(isVisible ? "Show" : "Hide");
    }

    return (
        <div className="border border-black m-3 p-3 bg-blue-100">
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <button className="mb-2 border border-red-500 p-2 bg-pink-200"
                onClick={handleBtn}
            >{btnText}</button>
            <p>{isVisible && desc}</p>
        </div>
    )
}

const Instamart = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-mono p-2 m-2 bg-slate-200">This is Instamart</h1>

            <Section title={"About Instamart"}
                desc={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            />

            <Section title={"Our Team"}
                desc={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            />

            <Section title={"Carrers"}
                desc={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            />
        </>
    )
}

export default Instamart;