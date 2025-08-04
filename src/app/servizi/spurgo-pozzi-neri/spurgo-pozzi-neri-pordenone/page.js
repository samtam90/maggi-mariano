import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pordenone",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pordenone", 
    locationNames: {label: "Pordenone", href: "pordenone"}  
});