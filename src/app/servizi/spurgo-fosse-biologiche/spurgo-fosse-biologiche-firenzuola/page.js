import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Firenzuola",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Firenzuola", 
    locationNames: {label: "Firenzuola", href: "firenzuola"}  
});
