import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import ig_logo from "../image/Team_icon_ig.png"
import eg_logo from "../image/Team_icon_Evil_Geniuses.png"
import secret_logo from "../image/Team_icon_Team_Secret.png"
import vp_logo from "../image/Team_icon_Virtuspro.png"
import neon_logo from "../image/teams_logo_neon.png"
import t_logo from "../image/teams_logo_thunder.png"
import bc_logo from "../image/teams_logo_beastcoast.png"
const FeaturedTeamsCard = () => {
    return (
        <div className="wbdv-widget-container wbdv-widget-interior">
            <h1 className="h1 wbdv-center-in-div">
                Featured Team
            </h1>

<div>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Team Name</th>
      <th>Team Logo</th>
      <th>Dpc Points</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Invictus Gaming</td>
      <td><img src={ig_logo} width="80" height="80"/></td>
      <td>1000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Evil Geniuses</td>
      <td><img src={eg_logo} width="80" height="80"/></td>
      <td>950</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Team Secret</td>
      <td><img src={secret_logo} width="80" height="80"/></td>
       </tr>
         <tr>
           <td>4</td>
           <td>Virtus.Pro</td>
           <td><img src={vp_logo} width="80" height="80"/></td>
           <td>700</td>
         </tr>
             <tr>
               <td>5</td>
               <td>OB Esports x Neon</td>
               <td><img src={neon_logo} width="80" height="80"/></td>
               <td>600</td>
             </tr>
                 <tr>
                   <td>5</td>
                   <td> Thunder Predator</td>
                   <td><img src={t_logo} width="80" height="80"/></td>
                   <td>600</td>
                 </tr>
                   <tr>
                        <td>7</td>
                       <td> beastcoast</td>
                    <td><img src={bc_logo} width="80" height="80"/></td>
                                    <td>500</td>
                     </tr>
                     <tr>
                     <td>7</td>
                           <td> PSG.LGD</td>
                       <td><img src="https://steamcdn-a.akamaihd.net/apps/dota2/images/team_logos/15.png" width="80" height="80"/></td>
                           <td>500</td>
                         </tr>
      </tbody>
    </Table>
    </div>
        </div>
    )

}

export default FeaturedTeamsCard