import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castiglion Fiorentino",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});