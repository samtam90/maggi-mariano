import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monte San Savino",
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
