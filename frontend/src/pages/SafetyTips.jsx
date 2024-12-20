import Navbar from "../components/Navbar";

export default function SafetyTips() {
    return(
        <div className="h-screen font-arimo">
            <section className="flex justify-center items-center h-[500px] md:h-[550px] mt-4 w-full">
                <div className="sm:[95%] w-4/5 max-w-[600px] bg-white px-6 pt-6 pb-8 rounded-lg shadow-custom relative">
                <h2 className="text-xl md:text-3xl font-bold text-center">Safety Tips</h2>
                <ul className="list-disc mt-6 space-y-2 pl-5"><li>Have a safety plan ready if you are in danger.</li>
                <li>Keep emergency contacts easily accessible.</li>
                <li>Know your surroundings and identify safe places nearby.</li>
                <li>Trust your instincts and act quickly if you sense danger.</li></ul>
                </div>
            </section>
        </div>
    );
}