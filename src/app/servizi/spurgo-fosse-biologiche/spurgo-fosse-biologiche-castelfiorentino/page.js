import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Castelfiorentino",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Castelfiorentino", 
    locationNames: {label: "Castelfiorentino", href: "castelfiorentino"}  
});
