function Home({ name = "user", age="no age" }) {
    return (
        <>
            {/* <h1>This is the Home component</h1> */}
            <h1>Hello, {name}! and  she is {age}</h1>
        </>
    )
}
export default Home