import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Laterina",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});
