import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Talla",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Talla", 
    locationNames: {label: "Talla", href: "talla"}  
});