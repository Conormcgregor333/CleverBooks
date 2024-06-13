export default function Team()
{
    return (
       <div className="team-section">
        <p className="team-head">Meet the Team</p>
         <div className="team-container">
            <div className="team-member">
                <img className="team-img" src="https://th.bing.com/th/id/OIP.jFFR4uctsRfmeT5Sp1T2kQHaLH?rs=1&pid=ImgDetMain" alt="" />
                <div className="team-description">
                    <p className="team-name">Dan</p>
                    <p className="team-bio">A passionate web developer proficient in Frontend.</p>
                    <button>Read More</button>
                </div>
            </div>
            <div className="team-member">
                <img  className="team-img" src="https://c.stocksy.com/a/bBo600/z9/1622887.jpg" alt="" />
                <div className="team-description">
                <p className="team-name">Vincent</p>
                <p className="team-bio"> Talks tech and walks tech. FullStack developer.</p>
                <button>Read More</button>
                   </div>
            </div>
            <div className="team-member">
                <img className="team-img" src="https://c.stocksy.com/a/XJC000/z0/47339.jpg" alt="" />
                <div className="team-description"
                > <p className="team-name">Chase</p>
                <p className="team-bio">Never lie no tech aint lie no more-simply a devloper.</p>
                <button>Read More</button>
                    
                   </div>
            </div>
            <div className="team-member">
                <img className="team-img" src="https://i.pinimg.com/originals/e0/05/b6/e005b694f200abe202939dfdaf705634.jpg" alt="" />
                <div className="team-description">
                <p className="team-name">Min</p>
                <p className="team-bio">Tech is life -life is Tech - just a devloper thing.</p>
                <button>Read More</button>
                </div>
            </div>
        </div>
       </div>
    )
}