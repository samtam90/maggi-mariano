import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Rassina",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});
