import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castiglion Fiorentino",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
