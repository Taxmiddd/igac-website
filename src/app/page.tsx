import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-[#f8f8f7]">
            {/* WORKS & EVENTS SHOWCASE */}
            <section className="relative w-full px-4 md:px-0 py-12 bg-white shadow-md border-b border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#203454]">Our Works & Events</h2>
                    {/* Carousel or Grid of Event cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Example Event Cards */}
                        <Card className="bg-[#fafbf9] border border-slate-200/60 flex flex-col items-center p-4">
                            <img src="https://ext.same-assets.com/1994147095/2637817405.jpeg" alt="Event 1" className="rounded-md mb-4 h-40 w-full object-cover" />
                            <h3 className="font-semibold text-lg text-[#1e4c3c]">IGAC Model United Nations Session 1</h3>
                            <p className="mt-2 text-sm text-gray-700">A Transformative Experience for Future Leaders</p>
                            <Button className="mt-4" variant="outline">Read More</Button>
                        </Card>
                        <Card className="bg-[#fafbf9] border border-slate-200/60 flex flex-col items-center p-4">
                            <img src="https://ext.same-assets.com/1994147095/2785018512.jpeg" alt="Event 2" className="rounded-md mb-4 h-40 w-full object-cover" />
                            <h3 className="font-semibold text-lg text-[#1e4c3c]">IGAC Model United Nations Session 2</h3>
                            <p className="mt-2 text-sm text-gray-700">Shaping the Future of Global Diplomacy</p>
                            <Button className="mt-4" variant="outline">Read More</Button>
                        </Card>
                        <Card className="bg-[#fafbf9] border border-slate-200/60 flex flex-col items-center p-4">
                            <img src="https://ext.same-assets.com/1994147095/372466060.jpeg" alt="Event 3" className="rounded-md mb-4 h-40 w-full object-cover" />
                            <h3 className="font-semibold text-lg text-[#1e4c3c]">Imperial Model United Nations 2024 (IMUN'24)</h3>
                            <p className="mt-2 text-sm text-gray-700">A Convergence of Diplomacy, Innovation, and Leadership</p>
                            <Button className="mt-4" variant="outline">Read More</Button>
                        </Card>
                    </div>
                </div>
            </section>
            {/* WHAT WE DO / IMPACT SECTION */}
            <section className="w-full py-12 bg-[#f8f8f7] border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#203454] mb-6">What We Do</h2>
                    <div className="grid gap-8 md:grid-cols-4 text-center">
                        <div>
                            <img src="https://ext.same-assets.com/1994147095/958177977.svg" alt="Diplomacy" className="h-14 mx-auto mb-3" />
                            <h4 className="font-semibold text-[#1e4c3c]">Diplomacy & Leadership</h4>
                            <p className="text-gray-700 text-sm">Empowering youth through Model United Nations (MUN) conferences and fostering leadership skills.</p>
                        </div>
                        <div>
                            <img src="https://ext.same-assets.com/1994147095/953021085.svg" alt="Innovation" className="h-14 mx-auto mb-3" />
                            <h4 className="font-semibold text-[#1e4c3c]">Entrepreneurship & Innovation</h4>
                            <p className="text-gray-700 text-sm">Organizing business summits to inspire creativity and strategic thinking.</p>
                        </div>
                        <div>
                            <img src="https://ext.same-assets.com/1994147095/3229807241.svg" alt="Collaboration" className="h-14 mx-auto mb-3" />
                            <h4 className="font-semibold text-[#1e4c3c]">Global Collaboration</h4>
                            <p className="text-gray-700 text-sm">Encouraging cross-cultural communication and diversity of thought.</p>
                        </div>
                        <div>
                            <img src="https://ext.same-assets.com/1994147095/3963634441.svg" alt="Non-Profit" className="h-14 mx-auto mb-3" />
                            <h4 className="font-semibold text-[#1e4c3c]">Non-Profit</h4>
                            <p className="text-gray-700 text-sm">Working non-profit to encourage youth leadership.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* CORE TEAM (After works/impact!) */}
            <section className="w-full py-12 bg-white border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#203454] mb-8">Meet the Core Team</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="flex flex-col items-center p-6">
                            <img src="https://ext.same-assets.com/1994147095/2515682246.jpeg" alt="Marzia E Jannat" className="rounded-full mb-4 h-32 w-32 object-cover border-4 border-[#509681]" />
                            <h3 className="font-semibold text-lg text-[#203454]">Marzia E Jannat</h3>
                            <p className="text-sm font-medium text-gray-700 mb-2">Founding Chairman</p>
                            <p className="text-xs text-center text-gray-600">"As the Founding Chairman of IGAC, I am honored to lead an initiative that is dedicated to the growth, empowerment, and future of our youth..."</p>
                        </Card>
                        <Card className="flex flex-col items-center p-6">
                            <img src="https://ext.same-assets.com/1994147095/3189992480.png" alt="Rezwan Rashid Zidan" className="rounded-full mb-4 h-32 w-32 object-cover border-4 border-[#1e4c3c]" />
                            <h3 className="font-semibold text-lg text-[#203454]">Rezwan Rashid Zidan</h3>
                            <p className="text-sm font-medium text-gray-700 mb-2">Co-founder & Former President</p>
                            <p className="text-xs text-center text-gray-600">"Holding the legacy of IGAC in his hands, he has singlehandedly managed to soar to great heights..."</p>
                        </Card>
                        <Card className="flex flex-col items-center p-6">
                            <img src="https://ext.same-assets.com/1994147095/2906324427.jpeg" alt="Al Rashidus Sabru Farabi" className="rounded-full mb-4 h-32 w-32 object-cover border-4 border-[#554c42]" />
                            <h3 className="font-semibold text-lg text-[#203454]">Al Rashidus Sabru Farabi</h3>
                            <p className="text-sm font-medium text-gray-700 mb-2">General Secretary</p>
                            <p className="text-xs text-center text-gray-600">"Our prestigious workaholic General Secretary, constantly amazed us with his passion and strive for excellence..."</p>
                        </Card>
                    </div>
                </div>
            </section>
            {/* CONTACT SECTION */}
            <section className="w-full py-12 bg-[#f8f8f7]">
                <div className="max-w-xl mx-auto px-4 md:px-0">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#203454] mb-6">Contact Us</h2>
                    <form className="grid gap-4">
                        <input type="text" placeholder="Name" className="border rounded px-4 py-2" required />
                        <input type="email" placeholder="Email" className="border rounded px-4 py-2" required />
                        <textarea placeholder="Message" className="border rounded px-4 py-2 min-h-[120px]" required />
                        <Button className="w-full mt-2">Send</Button>
                    </form>
                    <div className="mt-8 text-center text-gray-700 text-sm">
                        <p>Email: <a href="mailto:intlglobalaffairscouncil@gmail.com" className="text-[#509681]">intlglobalaffairscouncil@gmail.com</a></p>
                        <p>Phone: <a href="tel:+8801886022131" className="text-[#509681]">+880 188-602-2131</a></p>
                        <div className="flex gap-4 justify-center mt-2">
                            <a href="https://www.facebook.com/profile.php?id=100095775481124&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src="https://ext.same-assets.com/1994147095/335720455.svg" alt="Facebook" className="h-6" /></a>
                            <a href="https://www.instagram.com/_igac.official_?igsh=bWlseXd1YXljMXZ1" target="_blank" rel="noopener noreferrer"><img src="https://ext.same-assets.com/1994147095/3220034198.svg" alt="Instagram" className="h-6" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
