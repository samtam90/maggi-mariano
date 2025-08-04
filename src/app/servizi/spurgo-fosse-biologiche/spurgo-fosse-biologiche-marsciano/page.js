import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Marsciano",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Marsciano", 
    locationNames: {label: "Marsciano", href: "marsciano"}  
});
