import { FifthSection, FirstSection, FourthSection, SecondSection, ThirdSection } from "@components/HomeSections";

export const HomePage = () => {
    return (
        <div style={{ paddingBottom: '400px', backgroundColor: '#051650'}}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
        </div>
    );
}
