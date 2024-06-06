export default function Scrollup()
{
    function scroll()
    {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    return (
        <img className="upArrow"  onClick={()=>{scroll()}} src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d53d1ea3ece_go-to-top.svg" alt=""/>
    )
}