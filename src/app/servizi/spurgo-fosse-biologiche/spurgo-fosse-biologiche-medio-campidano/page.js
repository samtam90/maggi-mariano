import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Medio Campidano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
