import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri L'Aquila",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});