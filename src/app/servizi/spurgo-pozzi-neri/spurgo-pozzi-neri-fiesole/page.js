import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fiesole",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});