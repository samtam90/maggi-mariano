import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Calenzano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
