import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Certaldo",
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});