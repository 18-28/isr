export default async function revalidate(req, res){
    try {
        console.log(`revalidating: /`)
        await res.revalidate('/')
        return res.status(200).json({ message: `Revalidated: /` })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}