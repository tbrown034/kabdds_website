import React from 'react'
import { Icon, Statistic, Item } 
from 'semantic-ui-react'
import AGD from "../../Images/AGD.png"

const Fellow = () => (
    <div className="myFellow">
        <Item.Group>
    <Item>
      

      <Item.Content>
       
        <div className="myH2"><Icon name="quote left" size="big" />{"  "}If your dentist is a Fellow or Master of the Academy of General Dentistry (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry. Your dentist practices these techniques in a classroom setting multiple times a year — not every dentist does this.<Icon name="quote right" size="big" />{"  "}
        </div>
        <p>-</p><Item.Image size='large' src={AGD} />
      </Item.Content>
    </Item>
  </Item.Group>
  
</div>
)

export default Fellow;
