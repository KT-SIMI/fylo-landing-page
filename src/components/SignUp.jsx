export default function SignUp() {
    return (
    <main className="container bg-regular pt-20 text-white font-sans max-w-full z-20">
        <div className="container text-center py-12 px-10 w-3/5 mx-auto bg-signup z-30 sticky">
        <h1 className="text-2xl mb-5">Get early access today</h1>
        <p className="text-1xl mb-5">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team will be happy to help you</p>
        <input type="text" className="rounded-3xl px-3 w-1/2 py-3 bg-white placeholder:text-slate-600" placeholder="email@example.com" />
        <button className="bg-head-btn rounded-3xl px-5 py-3 ml-4">Get Started for Free</button>
        </div>
    </main>
    )
}