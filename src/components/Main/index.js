import './index.css'

const Main = () =>{
    const url = 'https://res.cloudinary.com/dg9itycrz/image/upload/v1708076012/GettyImages-1247357077_evco9o.webp'
    return(
        <div className='big'>   
            <h1 className='head'>Larry Hogan's Senate Bid Complicated by Vetoes</h1>
            <p className="para">Former Gov. Larry Hogan (R) announced on Friday that he’s launching a surprise bid for the open Maryland Senate seat, despite speculation that he was considering a third-party presidential bid.“We desperately need leaders willing to stand up to both parties — leaders that appreciate that no one of us has all the answers or all the power, because this is not just about the differences between the right and the left. This is about the difference between right and wrong,” Hogan said in an ad launching his Senate bid posted on X, the platform formerly known as Twitter.</p>
            <img src = {url} className='pic' />
            <p className='para'>Hogan’s entry was also cheered by No Labels, who said on X they were “ecstatic” to see him running. 

Retired Brig. Gen. John Teichert, also running on the GOP side for Cardin’s seat, didn’t mention Hogan by name in a statement, but said that “Marylanders deserve to have a choice and I welcome anyone to the race who wants to offer them one.”

A Hogan Senate bid is sure to create a more competitive contest. After his announcement, the nonpartisan election handicapper Cook Political Report shifted the race from “solid Democrat” to “likely Democrat.”

Hogan, who helmed the Free State between 2015 and 2023, was term limited and couldn’t run for a third consecutive stint as governor. He left office with a whopping 77 percent approval rating, according to a Gonzales poll last year. 

The Maryland Republican’s decision to run for outgoing Sen. Ben Cardin’s (D-Md.) seat was unexpected, given that he had ruled out running for the seat last year during an interview on NewsNation’s “The Hill” — and his public comments around mulling a bid for the White House.

Though he closed the door on running on the Republican side last year, he suggested he hadn’t completely ruled out the idea of running for a White House bid as a third-party candidate. 

“I guess you’d say there’s a crack in the door,” Hogan told Kevin Cirilli of The Hill’s “The Daily Debrief” last month. “It’s not something I’m seeking. I really have no interest whatsoever in running a suicide mission or in being a spoiler or — you know, electing Donald Trump or Joe Biden. I didn’t completely slam the door to it.” 

Hogan is likely to be the heavy favorite on the Republican side while Democrats are likely to choose between Rep. David Trone (D-Md.) and Prince George’s County Executive Angela Alsobrooks (D).  

Senate Democrats projected confidence about their chances with Cardin’s seat, however.

“A vote for Republican Larry Hogan is a vote to make Mitch McConnell Majority Leader and turn the Senate over to Republicans so they can pass a national abortion ban. Democrats have won every statewide federal election in Maryland for 44 years and 2024 will be no different,” said Democratic Senatorial Campaign Committee (DSCC) spokesperson Maeve Coyle in a statement. </p>
        </div>
    )
}

export default Main