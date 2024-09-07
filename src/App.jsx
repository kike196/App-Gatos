import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'


export function App () {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleReloadClick = () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='Gato' />}
            <button onClick={handleReloadClick}>Recargar</button>
        </main>
    )
}